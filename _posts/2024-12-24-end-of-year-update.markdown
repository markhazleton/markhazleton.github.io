---
layout: post
title: "Running Jekyll Locally on Windows"
date: 2024-12-24 10:00:00 +0000
categories: [updates, development]
tags: [jekyll, windows, visual-studio-code, ruby, troubleshooting]
author: Mark Hazleton
excerpt: "Getting a Jekyll site running locally on Windows is not hard, but it's not obvious either. Here's the setup that actually works."
---

Running Jekyll locally on Windows is one of those things that's straightforward once you've done it, and mildly annoying the first time. Here's the setup that works for me.

## What You Need

- [RubyInstaller for Windows](https://rubyinstaller.org/) — grab the **Ruby+Devkit** version (3.2.x x64). The Devkit matters; without it native gem extensions won't compile.
- Bundler: `gem install bundler` after Ruby is installed
- VS Code with the [Jekyll Snippets](https://marketplace.visualstudio.com/items?itemName=ginfuru.ginfuru-vscode-jekyll-syntax) extension if you want syntax highlighting for Liquid templates

## The wdm Gem

On Windows you want the `wdm` gem — it lets Jekyll watch for file changes natively instead of polling. Without it `--livereload` is sluggish. The Gemfile already has it:

```ruby
platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", "~> 0.1.1"
end
```

It only installs on Windows platforms, so it doesn't affect GitHub Actions or anyone running on Mac/Linux.

## Running the Dev Server

```powershell
bundle exec jekyll serve --livereload
```

That's it. The site builds to `_site/` and reloads in the browser whenever you save a file. Default port is 4000.

A few flags worth knowing:

```powershell
# Preview draft posts from _drafts/
bundle exec jekyll serve --livereload --drafts

# If something's broken and you want a clean build
bundle exec jekyll clean && bundle exec jekyll serve --livereload
```

## The Gemfile.lock Platform Issue

If you develop on Windows and deploy via GitHub Actions (Linux), you'll eventually hit this: the lockfile only has Windows platforms listed, and the Actions runner can't resolve gems.

Fix it once and forget it:

```bash
bundle lock --add-platform x86_64-linux
```

Commit the updated `Gemfile.lock`. Done. GitHub Actions will be happy.

## VS Code Setup

Two things worth configuring:

1. Set the terminal to PowerShell (`terminal.integrated.defaultProfile.windows`) so `bundle exec` works without switching shells
2. Add `_site/` and `.jekyll-cache/` to `.gitignore` if they aren't already — no reason to commit build output
