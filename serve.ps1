<#
  Tiny local web server — no installs needed.

  WHY: opening index.html directly gives the page a "file://" address.
  YouTube refuses to embed on file:// (you get "Error 153"), so the intro
  videos and the lofi music will not play. Serving over http:// fixes it,
  and matches how the site will behave once it is on GitHub Pages.

  HOW TO RUN
    1. Right-click this file  ->  "Run with PowerShell"
       ...or in a terminal, from this folder:
       powershell -ExecutionPolicy Bypass -File serve.ps1

    2. Open  http://localhost:8080  in your browser.
    3. Press Ctrl+C in the terminal window to stop it.
#>

param([int]$Port = 8080)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$mime = @{
  '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'
  '.js'='application/javascript; charset=utf-8'; '.json'='application/json'
  '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'
  '.gif'='image/gif'; '.svg'='image/svg+xml'; '.ico'='image/x-icon'
  '.webp'='image/webp'; '.woff'='font/woff'; '.woff2'='font/woff2'
  '.txt'='text/plain; charset=utf-8'; '.md'='text/markdown; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
try {
  $listener.Start()
} catch {
  Write-Host "Could not start on port $Port. Is something already using it?" -ForegroundColor Red
  Write-Host "Try:  powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8081" -ForegroundColor Yellow
  exit 1
}

Write-Host ""
Write-Host "  Serving $root" -ForegroundColor Gray
Write-Host "  ->  http://localhost:$Port" -ForegroundColor Green
Write-Host "  Press Ctrl+C to stop." -ForegroundColor Gray
Write-Host ""

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
    $rel = [uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'index.html' }

    $path = Join-Path $root $rel
    # keep requests inside the project folder
    $full = [System.IO.Path]::GetFullPath($path)
    if (-not $full.StartsWith([System.IO.Path]::GetFullPath($root))) {
      $ctx.Response.StatusCode = 403; $ctx.Response.Close(); continue
    }

    if (Test-Path $full -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $ctx.Response.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $ctx.Response.Headers.Add('Cache-Control','no-cache, no-store, must-revalidate')
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host ("  200  /{0}" -f $rel) -ForegroundColor DarkGray
    } else {
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - not found: /$rel")
      $ctx.Response.StatusCode = 404
      $ctx.Response.ContentType = 'text/plain; charset=utf-8'
      $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
      Write-Host ("  404  /{0}" -f $rel) -ForegroundColor DarkYellow
    }
    $ctx.Response.Close()
  } catch {
    # client disconnected mid-request; keep serving
  }
}
