---
layout: post
title: "Hi! Jekyll Platform Trends and News for 2026"
date: 2026-04-01 06:00:00 -0500
categories: [updates, development]
tags: [jekyll, github-pages, ruby, static-site-generators, bootstrap]
author: Mark Hazleton
excerpt: "A quick hello and a look at the latest trends in the Jekyll ecosystem heading into spring 2026."
---

Hi! It's April 2026 and I wanted to drop in with a quick update on what's happening in the Jekyll world and on this site.

## Jekyll Release Landscape

The Jekyll project continues its dual-track release strategy, maintaining both the **3.x** and **4.x** lines:

- **Jekyll 4.4.1** (January 29, 2025) is the latest stable release, a patch that restored existing behavior around front matter defaults with glob patterns in scope paths.
- **Jekyll 4.4.0** (January 27, 2025) was a significant minor release that introduced highlighted line marking via Liquid, bumped the minimum Ruby version to 2.7, added `csv`, `base64`, and `json` as explicit runtime dependencies, and fixed the `--livereload-ignore` option.
- **Jekyll 3.10.0** remains the version pinned by GitHub Pages, released back in June 2024. This is the version this site runs on.

The gap between Jekyll 4.x (latest) and what GitHub Pages supports (3.10.0) continues to be the biggest friction point for Jekyll users on GitHub Pages. Jekyll 4.x brings real improvements — faster builds, better Sass converter support, and modern Ruby compatibility — but GitHub Pages hasn't adopted it.

## GitHub Pages Dependency Status

As of the last GitHub Pages gem update (v232, August 2025):

| Key Dependency | Version |
|---|---|
| Jekyll | 3.10.0 |
| Ruby | 3.3.4 |
| Liquid | 4.0.4 |
| Kramdown | 2.4.0 |
| Rouge | 3.30.0 |
| Minima | 2.5.1 |
| jekyll-seo-tag | 2.8.0 |
| jekyll-feed | 0.17.0 |

Ruby 3.3.4 on the GitHub Pages runner is a welcome upgrade. The jekyll-sass-converter remains at 1.5.2 (the older Sass engine), which is worth noting if you're doing anything advanced with Sass.

## Trends in the Jekyll Ecosystem

### Static Site Generators: Jekyll's Place in 2026

Jekyll remains one of the most-used static site generators thanks to its deep GitHub Pages integration. While newer tools like Astro, Hugo, and Eleventy have gained significant traction, Jekyll's simplicity and zero-config GitHub Pages deployment keeps it relevant, especially for blogs and documentation sites.

### The Bootstrap 5 + Jekyll Combination

One trend I've been leaning into on this site is pairing Jekyll with **Bootstrap 5 via CDN**. Rather than fighting with Jekyll's Sass pipeline for complex layouts, loading Bootstrap 5.3.8 from a CDN gives you a full responsive framework with dark mode support (`data-bs-theme`), Bootstrap Icons, and modern utility classes — all without adding build complexity. This site now runs on this exact setup.

### AI-Assisted Development

The intersection of AI tooling and static site development continues to evolve rapidly. Tools like GitHub Copilot make it easy to generate post content, refactor layouts, modernize CSS, and audit configurations. Most of the recent modernization work on this site was done collaboratively with Copilot.

## What Changed on This Site Recently

Just wrapped up a round of modernization:

- **Bootstrap 5.3.8** — full CSS + JS via CDN, plus Bootstrap Icons
- **Custom CSS** now loaded alongside the Sass-compiled styles
- **Dark/light mode** toggle fixed and aligned with Bootstrap's `data-bs-theme` attribute
- **Social links** rebuilt with Bootstrap Icons (GitHub, LinkedIn, Stack Overflow, RSS)
- **Post front matter** standardized with consistent author, tags, and excerpts across all posts
- **Post excerpts** now displayed on the homepage
- **Footer** cleaned up with a link to [markhazleton.com](https://markhazleton.com)
- **Google Analytics removed** — Universal Analytics has been deprecated since July 2023

## Looking Ahead

A few things I'm watching:

- Whether GitHub Pages will ever adopt Jekyll 4.x (or if the custom Actions workflow becomes the recommended path)
- The continued evolution of Bootstrap's dark mode and CSS custom properties
- Ruby 3.4 support across the gem ecosystem
- Whether Jekyll's maintainer community grows — the project has been maintained by a small but dedicated group

That's it for now. More to come as the year progresses. You can always find my latest work at [markhazleton.com](https://markhazleton.com).
