

$ScriptFromGitHub = Invoke-WebRequest https://raw.githubusercontent.com/henderson2k/sn/main/popup.ps1
Invoke-Expression $($ScriptFromGitHub.Content)