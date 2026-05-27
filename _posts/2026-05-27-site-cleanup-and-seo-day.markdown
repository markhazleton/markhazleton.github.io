---
layout: post
title: "A Day of Site Cleanup"
date: 2026-05-27 08:00:00 -0500
categories: [updates, development]
tags: [jekyll, seo, github-pages, make-bold-spark, ga4, branding]
author: Mark Hazleton
excerpt: "Spent the day cleaning up this blog — new domain, GA4, better branding, and rewriting posts that were too polished for their own good."
---

I spent today doing something I'd been putting off for a while: actually cleaning up this site.

It started as a dependency update — just running `bundle outdated` to see what was stale — and turned into a full day of fixes. Here's what happened.

## Moved to a Proper Domain

The site was technically live at `markhazleton.github.io` but that's just the GitHub Pages default. Part of the [Make Bold Spark](https://makeboldspark.com) portfolio work involved migrating Spark projects to dedicated domains, so this one is now properly at [simpleblog.makeboldspark.com](https://simpleblog.makeboldspark.com).

That meant adding a CNAME file, fixing the `url` in `_config.yml` (which was pointing to the wrong domain and therefore generating wrong canonical URLs in every single page — good catch), and updating `robots.txt` to point the sitemap at the right address.

## GA4

Wired up Google Analytics 4 using the Make Bold Spark property (`G-RY77Z11S9E`). The old `google-analytics.html` include was still using the Universal Analytics script — which was deprecated in 2023 — so that got replaced entirely. Now the GA4 gtag loads in `<head>` on every page.

No data before today. Fresh start.

## Made It Look Like a Personal Blog

The site had no personality. The home page was literally empty — just a layout declaration. The header showed "Mark Hazleton" with no context. The about page read like a LinkedIn summary.

Fixed all of that:

- **Site title** changed to "Mark's Dev Notebook"
- **Header tagline** added: *notes from a developer who can't stop tinkering*
- **Home page intro** — a few sentences about who I am and what this is
- **Post list** now shows tags inline and a post count
- **About page** rewritten in actual first person — less resume, more human
- **Footer** updated: "no comments, no newsletter, no algorithm to please"

## Rewrote Seven Posts

This was the most time-consuming part. A few of the older posts had problems:

- The Bootstrap 5 post read like a product launch press release. "I'm excited to share a major milestone" — come on. Rewrote it as a straightforward dev note about why CDN over Sass pipeline made sense.
- The Copilot agent post was four sentences using "we" throughout. Personal blog. Who is "we"? Rewrote it as an honest account of what agent mode did well and where it needed correction.
- The December 2024 post had a body that cut off mid-sentence after the intro. Just... nothing there. Turned it into a proper Windows+Jekyll setup guide since that's clearly what it was meant to be.
- Two old posts from 2021–2022 were titled after the old `github.io` identity. Retitled them to match the current site.

The chaos mode post from last July survived intact. Some things shouldn't be edited.

## What's Next

The SEO plan has a few more items — Google Search Console verification, tag archive pages, related posts at the bottom of each post. Those are the next things on the list.

For now the site is in better shape than it was this morning, which is enough for one day.
