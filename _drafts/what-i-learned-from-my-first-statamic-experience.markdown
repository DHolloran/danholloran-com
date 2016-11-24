---
title: What I Learned From My First Statamic Experience
layout: post
---
My first experience with Statamic was pretty good even though it was a smaller site.

JSON API:
- Do not use templates for JSON API use controllers
- If you do use templates use Blade instead of Antlers.

General:
- It may be just me but use Blade templating instead of Antlers. Antlers seems like a good idea at first but it breaks down since by default you do not really have controllers feeding data to views.
- Disable search indexing during development.
- Git ignore suggestions.
- Read through the underlying API (https://docs.statamic.com/addons/api)
- Take advantage of the debug bar.

What I find difficult
- Not being able to map route to a controller without /!/ in the URL
