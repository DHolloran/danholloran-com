---
layout: post
title: "Installing Linters Sublime Text 3"
date: "2015-08-24 19:45"
---
Everything with a $ should be ran in the terminal without the ($ ).

- Linter explanation/definition
- Only for Mac OS X
- Explain ST2 difference for SublimeLinter
- List overview of steps
- Add path update for RVM
- Split into series once fully completed, released one each night for x required nights.

### Linters
- [PHP Code Sniffer (PHPCS)](https://github.com/squizlabs/PHP_CodeSniffer)
- [JSHint](http://jshint.com/)
- [JavaScript Code Style JSCS](http://jscs.info/)
- [SCSS-Lint](https://github.com/brigade/scss-lint)


### PHPCS Installation
Install PHP 5.6 or the latest version.
{% highlight bash %}
# php 5.6 === php56
$ brew install php56
{% endhighlight %}

Add this to your `~/.bashrc`, `~/.zshrc`, or other `~/.shellrc`
{% highlight bash %}
$ export PATH="$(brew --prefix php56)/bin:$PATH"
{% endhighlight %}

Install PHP Codesniffer

Installing PHPCS is the hardest of the linters the rest should be fairly simple.

{% highlight bash %}
$ brew install php-code-sniffer
{% endhighlight %}

Make sure linter is in your $PATH (It should return the path to the executable)
{% highlight bash %}
# /usr/local/bin/phpcs
$ which phpcs
{% endhighlight %}

Go to the PHP Codesniffer directory
{% highlight bash %}
# Make sure to change {PHPCS_VERSION} to the installed PHPCS version 2.3.2 is the current version as of this post.
$ cd /usr/local/Cellar/php-code-sniffer/{PHPCS_VERSION}/CodeSniffer/Standards
{% endhighlight %}

Install WordPress PHPCS standards
{% highlight bash %}
$ git clone -b master` https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs
{% endhighlight %}

Add WordPress standards to PHPCS configuration.  

{% highlight bash %}
# Make sure to change {PHPCS_VERSION} to the installed PHPCS version 2.3.2 is the current version as of this post.
$ phpcs --config-set installed_paths /usr/local/Cellar/php-code-sniffer/{PHPCS_VERSION}/CodeSniffer/Standards/wpcs
{% endhighlight %}

Check the installed standards, make sure one is WordPress.
{% highlight bash %}
$ phpcs -i
{% endhighlight %}

Set the default standard.
{% highlight bash %}
$ phpcs --config-set default_standard WordPress
{% endhighlight %}

<br>

### JSCS Installation
Install JSCS
{% highlight bash %}
$ npm install -g jscs
{% endhighlight %}
Make sure linter is in your $PATH (It should return the path to the executable)
{% highlight bash %}
# /usr/local/bin/jshint
$ which jscs
{% endhighlight %}

Configuration is handled via the [.jscs.json](http://jscs.info/overview.html#-config-c) you can read more about the available configuration options [in the docs](http://jscs.info/rules.html).

You can also check out my [JSCS configuration](https://github.com/DHolloran/linter-examples/blob/master/.jscs.json).

<br>

### JSHint Installation
Install JSHint
{% highlight bash %}
npm install -g jshint
{% endhighlight %}

Make sure linter is in your $PATH (It should return the path to the executable)
{% highlight bash %}
$ which jshint
{% endhighlight %}

Configuration is handled via the [.jshintrc](http://jshint.com/docs/) you can read more about the available configuration options [in the docs](http://jshint.com/docs/options/).

You can also check out my [JSHint configuration](https://github.com/DHolloran/linter-examples/blob/master/.jshintrc).

<br>

### SCSS-Lint Installation
Install SCSS Lint
{% highlight bash %}
$ gem install scss_lint
{% endhighlight %}

3. Make sure linter is in your $PATH (It should return the path to the executable)
{% highlight bash %}
$ which scss-lint
{% endhighlight %}

Note: Configuration is handled via the  
Configuration is handled via the [.scss-lint.yml](https://github.com/brigade/scss-lint#configuration) you can read more about the available configuration options [in the docs](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md).

You can also check out my [SCSS-Lint configuration](https://github.com/DHolloran/linter-examples/blob/master/.scss-lint.yml).

<br>

### Package Control Installation
If for some reason you have been using Sublime Text 3 without Package Control you need to install it now. You can get the install instructions via the [Package Control website](https://packagecontrol.io/installation).

<br>

### Installing plugins via Package Control

*This will be referred to as install "X Package" via Package Control.*

1. Open the command palette `cmd+shift+p`
2. Type `install` and select `Package Control: Install Package` from the command palette.
3. Wait for the list of available packages to load and then start typing the name of the package until you see the plugin you want to install.
4. Click on the package you want to install.
5. Once the plugin is installed you should receive an install notice.
6. Restart Sublime after all packages you need are installed.

<br>

### Linter Installation
All of the linters require the [SublimeLinter Plugin](http://sublimelinter.readthedocs.org/en/latest/installation.html) to be installed first.

1. Install `SublimeLinter` via package control.
2. Install `SublimeLinter-phpcs` via package control.
3. Install `SublimeLinter-jshint` via package control.
4. Install `SublimeLinter-jscs` via package control.
5. Install `SublimeLinter-contrib-scss-lint` via package control.

