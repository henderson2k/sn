$listenerPort = "8007"
$ServerThreadCode = {
  $listenerPort = $args[0]
  $listener = New-Object System.Net.HttpListener
  $listenerString = "http://+:$listenerPort/"
  $listener.Prefixes.Add($listenerString)
 
  $listener.Start()
 
  while ($listener.IsListening) {
 
    $context = $listener.GetContext() # blocks until request is received
    $request = $context.Request
    $response = $context.Response
    $message = "Bad boys, bad boys whatcha gonna do? `nWhatcha gonna do when they come for you?`n"

    # Show Url Path and Query in the response.
    $path = $context.Request.Url.LocalPath.ToString()
    $query = $context.Request.Url.Query.ToString()
    if ($path){$message += "`nPath: " + $path}
    if ($query){$message += "`nQuery: " + $query}

    # This will terminate the script. Remove from production!
    if ($request.Url -match '/end$') { break }

    [byte[]] $buffer = [System.Text.Encoding]::UTF8.GetBytes($message)
    $response.ContentLength64 = $buffer.length
    $response.StatusCode = 200
    $output = $response.OutputStream
    $output.Write($buffer, 0, $buffer.length)
    $output.Close()
  }
 
  $listener.Stop()
}
  
$serverJob = Start-Job $ServerThreadCode -ArgumentList $listenerPort
Write-Host "Listening on $listenerPort ..."
Write-Host "Try me: Invoke-WebRequest 'http://localhost:$listenerPort/hello?world'"
Write-Host "Press Ctrl+X to terminate" 
 
[console]::TreatControlCAsInput = $true

# Wait for it all to complete
while ($serverJob.State -eq "Running")
{
  if ([console]::KeyAvailable) {
    $key = [system.console]::readkey($true)
    if (($key.modifiers -band [consolemodifiers]"control") -and ($key.key -eq "X"))
    {
      Write-Host "Terminating. Please Wait.."
      try { $result = Invoke-WebRequest -Uri "http://localhost:$listenerPort/end" -TimeoutSec 3 } catch { Write-Host "Listener ended" }
      $serverJob | Stop-Job 
      Remove-Job $serverJob
      break
    }
  }

  Start-Sleep -s 1
}
 
# Getting the information back from the jobs
Get-Job | Receive-Job
