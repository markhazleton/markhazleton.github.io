# GitHub Copilot Instructions for markhazleton.github.io

## Project Overview
Personal Jekyll blog site for Mark Hazleton, deployed to GitHub Pages from the `sources` branch. Uses a customized Minima theme with Bootstrap 5 integration, dark/light mode toggle, and Bootstrap Icons.

**Tech Stack:**
- Jekyll 3.10.0 (via github-pages gem)
- Ruby 3.2.2
- Customized Minima theme (custom layouts/includes)
- Custom CSS with Bootstrap-inspired utilities
- Emoji support via jemoji
- GitHub Actions for automated CI/CD

**Key URLs:**
- Production: https://markhazleton.com
- Repository: https://github.com/markhazleton/markhazleton.github.io
- Source branch: `sources` → deploys to `gh-pages`

## Critical Developer Workflows

### Local Development
```powershell
# Start development server with live reload (preferred)
bundle exec jekyll serve --livereload

# Include drafts from _drafts/ folder
bundle exec jekyll serve --livereload --drafts

# Production-like build (Windows PowerShell)
$env:JEKYLL_ENV="production"; bundle exec jekyll build

# Check for configuration issues
bundle exec jekyll doctor
```

### Creating New Blog Posts
**Naming Convention:** `YYYY-MM-DD-title-slug.markdown` in `_posts/` directory

**Front Matter Template:**
```yaml
---
layout: post
title: "Descriptive Title"
date: 2025-MM-DD HH:MM:SS +0000
categories: [category1, category2]  # Broad groupings
tags: [tag1, tag2, tag3]           # Specific topics
author: Mark Hazleton
excerpt: "SEO-optimized description (150-160 chars)"
---
```

**Category Conventions:**
- `updates` - Site updates and announcements
- `development` - Technical development posts
- `troubleshooting` - Problem-solving content
- Multi-word categories use space-separated values (e.g., `jekyll update`)

**Tags:** Use lowercase, hyphenated format for multi-word tags (e.g., `github-copilot`, `web-design`)

### Deployment Process
1. Push to `sources` branch triggers GitHub Actions
2. Workflow builds Jekyll site with Ruby 3.2, bundle cache enabled
3. Deploys to `gh-pages` branch automatically
4. GitHub Pages serves from `gh-pages` at markhazleton.com

**Manual deployment check:**
```powershell
# Verify build locally before pushing
$env:JEKYLL_ENV="production"; bundle exec jekyll build --baseurl "/"
```

## Project-Specific Patterns

### Layout Architecture
```
_layouts/
├── default.html    # Base template with header/footer includes
├── home.html       # Homepage with post listings
├── page.html       # Static pages (inherits from default)
└── post.html       # Blog post layout with SEO markup
```

**Layout Chain:** `post.html` → `default.html` → includes (`head.html`, `header.html`, `footer.html`)
**Theme Implementation:** Custom Minima layouts, not using theme gem

### Custom CSS Architecture
Site uses custom CSS with Bootstrap-inspired patterns (no actual Bootstrap framework):
- Custom utility classes for rapid development
- CSS Grid and Flexbox for layouts
- CSS custom properties in `:root` for theme consistency
- Theme switcher with localStorage persistence (light/dark modes)
- Located in: `assets/css/style.css` (not Sass-generated)

**Custom CSS Location:** `assets/css/style.css` (not `assets/main.scss`)

### Icon Usage
Emoji-based icons throughout (via jemoji plugin). Common patterns:
- Theme toggle: 🌙 (moon) for light mode, ☀️ (sun) for dark mode
- Social links: Standard text links, no icon font
- Simple, accessible, no external dependencies

### Configuration (_config.yml)
**Important settings:**
- `baseurl: "/"` - root path for site
- `theme: null` + `remote_theme: null` - using customized Minima (not as gem)
- `minima.skin: auto` - responsive to system theme preference
- Plugins: `jekyll-feed`, `jemoji`, `jekyll-sitemap`, `jekyll-seo-tag`
- `sass.style: compressed` - production CSS optimization
- Email fields intentionally blank for privacy

**Exclusions:** `docs/`, `README.md`, `node_modules/`, `vendor/` not built

## Build & Dependency Management

### Updating Dependencies
```powershell
# Update all gems (monthly maintenance)
bundle update

# Check outdated gems (will show many due to GitHub Pages pinning)
bundle outdated

# Verify GitHub Pages compatibility
bundle exec github-pages versions

# Test after updates
bundle exec jekyll doctor
bundle exec jekyll serve --livereload
```

**Note:** Many gems will appear outdated because `github-pages` gem pins specific versions for deployment compatibility. This is intentional and correct.

### Troubleshooting Build Issues
```powershell
# Clear Jekyll cache and rebuild
bundle exec jekyll clean
Remove-Item -Recurse -Force _site, .jekyll-cache -ErrorAction SilentlyContinue
bundle exec jekyll build

# Check for issues
bundle exec jekyll doctor

# Reset bundle if dependency conflicts
Remove-Item Gemfile.lock
bundle install
```

## Key Files & Directories

**Configuration:**
- `_config.yml` - Site configuration, plugins, theme settings
- `Gemfile` - Ruby gem dependencies (github-pages gem + faraday-retry)

**Content:**
- `_posts/` - Blog posts (YYYY-MM-DD-title.markdown format)
- `_drafts/` - Unpublished drafts (no date prefix, visible with --drafts flag)

**Layouts & Templates:**
- `_layouts/` - Page templates (default, home, page, post)
- `_includes/` - Reusable components (header, footer, head, social)
- `_sass/minima/` - Sass stylesheets (_base.scss, _layout.scss, _syntax-highlighting.scss)

**Static Assets:**
- `assets/css/style.css` - Custom CSS (Bootstrap-inspired utilities)
- `assets/main.scss` - Sass entry point (imports minima base styles)
- No Bootstrap framework files (custom implementation only)

**Generated (do not edit):**
- `_site/` - Built site (git-ignored, generated by Jekyll)
- `docs/` - Legacy build directory (excluded from build)

## SEO & Performance Patterns

**SEO Handled by jekyll-seo-tag:**
- Auto-generates meta tags from front matter
- Uses `excerpt` field or auto-generates meta description
- JSON-LD structured data included automatically
- XML sitemap auto-generated by jekyll-sitemap
- Open Graph and Twitter Card meta tags

**Performance Optimizations:**
- Sass compression enabled (`style: compressed`)
- Bootstrap 5 via CDN (no local copy)
- Minimal plugin usage for faster builds
- GitHub Pages handles caching and CDN delivery

## Important Gotchas

1. **Branch Strategy:** Work on `sources` branch, never commit directly to `gh-pages` (auto-generated)
2. **Base URL:** Always use `baseurl: "/"` - site is at root domain, not subdirectory
3. **Jekyll Version:** 3.10.0 via github-pages gem (not 4.x) for GitHub Pages compatibility
4. **Theme Setup:** Custom Minima implementation, no theme gem installed
5. **Windows Development:** `wdm` gem (~> 0.1.1) included for file watching performance
6. **GitHub Pages Compatibility:** Must use `github-pages` gem bundle for deployment parity
7. **Post Categories:** Can be array `[cat1, cat2]` or space-separated `cat1 cat2`
8. **No Bootstrap:** Despite Bootstrap-like class names, no Bootstrap framework is installed
9. **CSS Location:** Custom CSS in `assets/css/style.css`, not generated from Sass

## Testing Changes

**Before committing:**
1. Run `bundle exec jekyll serve --livereload` and test locally
2. Check responsive behavior (mobile/tablet/desktop)
3. Test dark/light mode theme switcher
4. Verify internal links resolve correctly
5. Validate front matter YAML syntax
6. Test production build: `$env:JEKYLL_ENV="production"; bundle exec jekyll build`

**After deployment:**
- Monitor GitHub Actions workflow status
- Verify site loads at https://markhazleton.com
- Check browser console for errors

---

**Reference Documentation:**
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Minima Theme](https://github.com/jekyll/minima)
- [Jekyll Plugins](https://jekyllrb.com/docs/plugins/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

*Last updated: January 2026*