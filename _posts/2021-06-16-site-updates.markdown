---
layout: post
title: "Site Updates"
date: 2021-06-16 08:26:16 -0500
categories: jekyll update
---

Making some updates to the site as I learn more about jekyll and GitHub.io publishing

Learned to update my config.yml to exclude my published (doc) folder, that way Jekyll is not trying to build a site recursivly .

```
exclude:
  - Gemfile
  - Gemfile.lock
  - /docs/
  - /README.md
```

Also updated the config to include links to the published site

```
# Site settings
title: Mark Hazleton
email: mark.hazleton@controlorigins.com
description: >- # this means to ignore newlines until "baseurl:"
  Mark Hazleton on GitHub
baseurl: "/" # the subpath of your site, e.g. /blog
url: "https://markhazleton.github.io/" # the base hostname & protocol for your site, e.g. http://example.com
author:
  name: Mark Hazleton
  email: mark.hazleton@controlorigins.com
```

Still need to pick how to automate the copy from my \_sites folder to my docs folder that GitHub uses to publish updates to my site.
