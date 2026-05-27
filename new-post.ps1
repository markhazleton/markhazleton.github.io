# new-post.ps1 — Create a new Jekyll post stub for Mark's Dev Notebook
# Usage: .\new-post.ps1 "My Post Title"
#        .\new-post.ps1  (will prompt for title)

param(
    [string]$Title
)

# Prompt if no title given
if (-not $Title) {
    $Title = Read-Host "Post title"
}
if (-not $Title) {
    Write-Error "No title provided. Exiting."
    exit 1
}

# Build filename
$date     = Get-Date -Format "yyyy-MM-dd"
$time     = Get-Date -Format "HH:mm:ss"
$slug     = $Title.ToLower() -replace '[^a-z0-9\s-]', '' -replace '\s+', '-' -replace '-+', '-'
$filename = "_posts\$date-$slug.markdown"

# Bail if file already exists
if (Test-Path $filename) {
    Write-Error "File already exists: $filename"
    exit 1
}

$content = @"
---
layout: post
title: "$Title"
date: $date $time -0500
categories: [development]
tags: [tag1, tag2]
author: Mark Hazleton
excerpt: "One sentence description — edit before publishing."
---

Write your post here.
"@

Set-Content -Path $filename -Value $content -Encoding UTF8
Write-Host ""
Write-Host "Created: $filename"
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open the file and write your content"
Write-Host "  2. Update categories, tags, and excerpt"
Write-Host "  3. git add $filename"
Write-Host "  4. git commit -m `"Add post: $Title`""
Write-Host "  5. git push"
Write-Host ""

# Open in VS Code if available
if (Get-Command code -ErrorAction SilentlyContinue) {
    code $filename
}
