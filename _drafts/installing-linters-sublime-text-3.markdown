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

