# html url
$url = 'http://localhost:8080/'

# html code
$html = @"    
<!DOCTYPE html> <html> <body>
<h1>PowerShell Web Server</h1>
<p>Example Web Server with Http Listener from github</p>
</body> </html>
"@

try
{
    
# start basic web server
$htmlListener = New-Object System.Net.HttpListener
$htmlListener.Prefixes.Add($url)
$htmlListener.Start()

# process received html request
$httpContext = $htmlListener.GetContext()
$httpResponse = $httpContext.Response

# return the HTML code/page to the caller
$buffer = [Text.Encoding]::UTF8.GetBytes($html)
$httpResponse.ContentLength64 = $buffer.length
$httpResponse.OutputStream.Write($buffer, 0, $buffer.length)
# Read-Host -Prompt "Press Enter to exit"
# close and stop http response and listener
$httpResponse.Close()
$htmlListener.Stop()

}
catch
{
    Write-Error $_.Exception.ToString()
    Read-Host -Prompt "The above error occurred. Press Enter to exit."
}
