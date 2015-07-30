---
layout: post
title: Setting Up a Jekyll Blog - Part 3
date: "2015-07-29 20:37"
---

### Jekyll + Liquid
Jekyll uses a templating language named [Liquid](http://liquidmarkup.org/) developed at [Shopify](http://www.shopify.com/). This gives you so extra abiliteis above that of plain old HTML. Such as conditionals, loops, access to variables, etc. which allows you to do things that traditionally required another language. You can find more information about Liquid on their [wiki](https://github.com/Shopify/Liquid/wiki).

### Working With Jekyll Templates
So far I have not done too much editing of the main template Jekyll comes with. I have edited the main blog roll a little and added pagination so I am going to go through a few snippets you can use on your own blog.

You can add an excerpt to your blog roll on index.html easily.

![](/dist/uploads/post-excerpt.png)

The double curly braces on either end denote a Liquid tag that will be output to the screen. The `post.excerpt` comes fromt the global post object which gives you access to the current post. There is also a `site` object that gives you access to configuration details. The `strip_html`, `strip_newlines`, and `truncate:160` are Liquid functions that help to clean up the excerpt before outputting it to the screen.

Liquid also has loops to make it easy to display your posts in a blog roll.

![Liquid Loop Example](/dist/uploads/liquid-loop.png)

The curly brace ({) and percentage sign (%) denote a logical block such as a for loop. This basically goes through the posts until there are none left and then outputs a small snippet to the screen. This is a snippet taken directly from my home page right now. You can see that there is more data accessible from the `post` object. Such as `post.date` for the posts publish date and `post.title` for the post title.

In Liquid you can also use if/else statements just like you would normally in server side languages.

![Liquid If/Else Example](/dist/uploads/liquid-if-else.png)

These are only some of the possibilities with Liquid you can read more about what is possible in the [Liquid Docs](https://github.com/Shopify/liquid/wiki). You will definetly take a look at the [Liquid for Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers) or [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) depending on your personal preference. You can always read both and you might be a unicorn...

Now that we have a basic understanding of liquid and how the templates work now its time to style our site. I will be using SCSS but you can drop in CSS, LESS, Stylus, etc. with a few small additions.
