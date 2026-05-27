---
layout: post
title: "Using GitHub Copilot Agent Mode on a Jekyll Site"
date: 2025-04-13 10:00:00 +0000
categories: [updates, development]
tags: [github-copilot, ai, dark-mode, css, jekyll]
author: Mark Hazleton
excerpt: "Tried GitHub Copilot's agent mode to add a dark/light theme toggle. It handled the CSS variables and JavaScript without much direction — here's what surprised me."
---

GitHub Copilot added an "agent mode" that can take a larger task description and work through multiple file edits in sequence, rather than just completing the current line. I used it to add a proper dark/light mode toggle to this site and it went better than I expected.

## What I Asked It to Do

The brief was simple: add a theme switcher that respects the system preference, lets the user override it, and persists the choice across page loads. It needed to touch the header template, the CSS, and write the JavaScript.

Normally that's 20 minutes of work I'd do myself. I wanted to see how much of it Copilot would handle correctly without me steering.

## What It Actually Did

It proposed three changes in one go:

1. Added CSS custom properties for both light and dark themes under `[data-theme="dark"]` and `[data-theme="light"]` selectors
2. Added a toggle button to the header with an aria-label
3. Wrote the JavaScript to read `localStorage`, fall back to `prefers-color-scheme`, and set the attribute on `<html>`

The CSS variable approach was the right call — no class toggling, no duplicated rules. The JavaScript was clean. I made one change: it was setting the attribute on `<body>` and Bootstrap 5 wants it on `<html>` for `data-bs-theme` to work, so I moved that.

## Where It Needed Correction

The theme switcher icon started as `🌙` hardcoded in the HTML. Copilot didn't account for the initial state — if you loaded the page in light mode, you'd see a moon icon suggesting it was already dark. I had to point that out and it fixed the initialization logic.

It also initially used `document.body` instead of `document.documentElement`. Small thing, but the kind of thing you catch immediately if you know Bootstrap's dark mode implementation.

## Verdict

For a well-scoped task with a clear outcome, agent mode saves real time. It's best when you know exactly what the answer should look like — then you're just reviewing instead of writing. Where it struggles is anything that requires understanding your specific setup (in this case, which element Bootstrap 5 watches for theme attributes).

Useful tool. Doesn't replace knowing what you're doing.
