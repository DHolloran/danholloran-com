---
layout: post
title: "Setting Up a Jeykll Blog - Part 2"
date: "2015-07-14 19:37"
---

### Adding your first post.
So we are already to write our first post. To create a new post all you have to do is make a new file in the _posts directoy and title it `YEAR-MONTH-DAY-title.MARKUP`. If you prefer to start all your posts as drafts you just need to create a new file in the _drafts directory and title it `title.MARKUP`. Once you have completed the draft you can move it to the _posts folder and add the `YEAR-MONTH-DAY-` to the beginning of the file name.

So lets say the title of our first blog post is "My First Jeykll Blog Post" then the name of the post would be `2015-07-14-my-first-jeykll-blog-post.md` or if it is a draft then it would just be `my-first-jeykll-blog-post.md`.

Then you need to add the [Front Matter](http://jekyllrb.com/docs/frontmatter/) which is a way to tell Jeykll a little more about what this file is. At the top of your newly created file you can add this.
```
---
layout: post
title: My First Jeykll Blog Post
---
```


By default Jeykll supports [Markdown](http://daringfireball.net/projects/markdown/syntax) but you can add formatters for [many different formats](http://jekyllrb.com/docs/plugins/#converters-1). You can also access media assets in a folder such as assets using the &#123;&#123; site.url &#125;&#125; /assets/screenshot.jpg variable in the post.  
`![My helpful screenshot]({{ site.url }}/assets/screenshot.jpg)`

### Building your blog.
There are a couple options depending on if you are planning on hosting through [Github Pages](https://pages.github.com/) or somewhere else. Either way there is a build command that just builds the required files for the blog. Then there is a server command that builds the site and then servers it up on http://127.0.0.1:4000/ while watching for changes. Both the build and server command have a --drafts flag that will also build/serve your drafts as your latest posts. Which makes it easy for writing your draft posts just make sure not to deploy the sites directory right after building with the --drafts flag.

{% highlight sh %}
# Default Jekyll build.
jekyll build;
# Jekyll serve on http://127.0.0.1:4000/.
jekyll serve;
# Jekyll build drafts.
jekyll build --drafts;
# Jekyll serve on http://127.0.0.1:4000/ drafts.
jekyll serve --drafts;

# Github Pages Jekyll build.
bundle exec jekyll build;
# Github Pages Jekyll serve on http://127.0.0.1:4000/.
bundle exec jekyll serve;
# Github Pages Jekyll build drafts.
bundle exec jekyll build --drafts;
# Github Pages Jekyll serve on http://127.0.0.1:4000/ drafts.
bundle exec jekyll serve --drafts;
{% endhighlight %}

The main difference between the default Jeykll and Github Pages is that with Github Pages you use Bundler as well. This way you have the same environment as Github Pages.

### Front matter