---
layout: post
title: "Setting Up a Jeykll Blog"
date: "2015-07-10 19:56"
---

I found Jeykll fairly easy to setup not quite 5 minute setup easy but not to bad. Honestly I spent most of the time reading the documentation which is simple and excently. I did want to go through the steps of how to setup your own Jeykll blog. I am going to assume som elevel of comfortability with the command line and non-Windows OS.

### Inital Setup
We first have to setup a few dependencies such as Ruby and Jeykll.

I prefer to install Ruby via RVM but any other method is fine more options can be found [here](https://www.ruby-lang.org/en/documentation/installation/)  
{% highlight sh %}\curl -sSL https://get.rvm.io | bash -s stable --ruby{% endhighlight %}

Once you have Ruby installed you can install Jeykll  
{% highlight sh %}gem install jekyll{% endhighlight %}

Now we are ready to create a new Jeykll blog.
{% highlight sh %}jekyll new my-blog{% endhighlight %}


### (Optional) Github Pages setup
Since your already using Git and Github you might as well host your blog there. Hey its free and simple don't have to worry about hosting.
If you are planning on deploying to github pages you can install the [Github Pages Gem](https://github.com/github/pages-gem) via [Bundler](http://bundler.io/).
1. Install bundler
{% highlight sh %}gem install bundler;{% endhighlight %}
2. Create a new Gemfile in the `my-blog` directory.
3. Add `gem 'github-pages'` into the Gemfile.
4. Run `bundle install` in the `my-blog` directory.



# Setup
2. Install Jeykll (Default/Github Pages)
3. _config.yml
4. First post (Front Matter/Build/Serve)
4. Compiling SASS (Jeykll/Gulp/Grunt)
5. Small template tweaks (Add excerpt, pagination, other?)

### Hosting/Git/Deployments
1. Setting up git/repo
2. Setting up Github
3. Deploying to Github Pages
4. Setting up a custom domain