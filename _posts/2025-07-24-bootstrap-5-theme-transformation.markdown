---
layout: post
title: "Switching to Bootstrap 5 on a Jekyll Site"
date: 2025-07-24 10:00:00 +0000
categories: [updates, development]
tags: [bootstrap, jekyll, css, dark-mode, icons]
author: Mark Hazleton
excerpt: "Dropped the default Minima Sass pipeline and swapped in Bootstrap 5 via CDN. Here's what changed and why it was the right call for a simple blog."
---

I swapped out the default Minima theme pipeline on this site for Bootstrap 5 loaded via CDN. Here's what I did and why.

## The Problem with the Default Setup

The out-of-the-box Jekyll/Minima setup uses a Sass pipeline to compile styles locally. It works, but it's friction — every tweak to the theme means fighting the Sass compiler, understanding which variables Minima exposes, and hoping the github-pages gem version matches your local one.

For a simple personal blog, that's more complexity than the job requires.

## What I Switched To

Bootstrap 5.3 via CDN, loaded directly in the `<head>`. No local compilation. No Sass imports. Just:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

Plus a small `style.css` for the handful of site-specific things Bootstrap doesn't cover.

## Dark/Light Mode

Bootstrap 5.3 handles this natively with `data-bs-theme="dark"` on the `<html>` element. I added a toggle button to the header that reads from `localStorage` and respects the system preference on first visit:

```javascript
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-bs-theme', theme);
```

Works without any custom CSS. That's the whole point.

## Bootstrap Icons

Replaced the emoji-based icons in the footer and nav with Bootstrap Icons. SVGs, consistent sizing, no font-loading surprises. The social links went from a mix of text and emoji to clean icon links that look the same in every browser.

## The Tradeoff

CDN dependency means the icons and styles don't load if the CDN is down. For a personal blog that's an acceptable risk. If this were a production app with uptime requirements I'd bundle them — but it's not, so I didn't.

The github-pages gem still pins Jekyll to 3.10.0 and Sass to an old compiler. Bypassing the Sass pipeline entirely sidesteps that constraint cleanly.
