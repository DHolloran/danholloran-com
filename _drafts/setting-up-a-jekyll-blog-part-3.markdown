---
layout: post
title: "Setting Up a Jekyll Blog - Part 3"
date: "2015-07-22 20:02"
---

### Jekyll + Liquid
Jekyll uses a templating language named [Liquid](http://liquidmarkup.org/) developed at [Shopify](http://www.shopify.com/). This gives you so extra abiliteis above that of plain old HTML. Such as conditionals, loops, access to variables, etc. which allows you to do things that traditionally required another language. You can find more information about Liquid on their [wiki](https://github.com/Shopify/liquid/wiki).

### Working With Jekyll Templates
So far I have not done too much editing of the main template Jekyll comes with. I have edited the main blog roll a little and added pagination so I am going to go through a few snippets you can use in your own blog.

You can add an excerpt to your blog roll on index.html easily.
{% highlight html %}
```
{{ post.excerpt | strip_html | strip_newlines | truncate: 160 }}
```
{% endhighlight %}

