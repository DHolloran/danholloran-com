---
layout: post
title: "WordPress Development Environment Setup"
date: "2015-08-14 08:09"
---
### Ideas
- Overcomming fear of commandline would fix a good chunk of this
- We have been looking into ways of streamlining
- Why did I decide to write this up, experiences at work.
- Explain more about the tools we use
- Explain some alternatives
- Maybe break out into a series like Jekyll install

### Explanation of terms
- [Beanstalk (Hosted Git/Deployment)](http://beanstalkapp.com/)
- [WP Engine (Managed WordPress Hosting)](http://wpengine.com/)
- Remote: Beanstalk or WP-Engine repository
- Branch: The current fork of the code base ex: master
- Local master: A branch on your computer
- Remote master: A branch on a remote
- Head: Your current branch
- [Tower: Mac OSX Git GUI](http://www.git-tower.com/)

### WordPress Setup
1. [Download WordPress](https://wordpress.org/latest.zip)
1. Put WordPress into `/Applications/MAMP/htdocs/sitename.com`.
1. Add empty database `wp_sitename_com`

### Vhost Setup
#### Quick tips
- In terminal `open /path/to/directory/.` will open the directory of the parent file you want to edit.
- [Sublime Text 3](https://www.sublimetext.com/docs/3/osx_command_line.html) and [Atom](https://atom.io/docs/v0.186.0/getting-started#working-with-files) can be accessed via the commandline.


1. Open `/Applications/MAMP/conf/apache/vhosts.conf` in text editor of choice.
1. Add a new virtual host.
```
<VirtualHost *:80>
ServerName sitename.dev
DocumentRoot /Applications/MAMP/htdocs/sitename.com
<Directory /Applications/MAMP/htdocs/sitename.com>
Options Indexes FollowSymLinks MultiViews
AllowOverride All
Order allow,deny
allow from all
</Directory>
</VirtualHost>
```
1. Open `/private/etc/hosts` in text editor of choice.
1. Add `127.0.0.1 sitename.dev` to the `/private/etc/hosts` file.
1. Restart MAMP

### WordPress Install ([Codex documentation](https://codex.wordpress.org/Installing_WordPress))
1. Navigate to `sitename.dev` in your browser.
1. Choose the WordPress language.
1. Input the database credentials.
1. Fill out the site information and adminstrator user account
1. Log into WordPress

### WordPress Migrate DB Pro ([WP Migrate DB Pro Documentation](https://deliciousbrains.com/wp-migrate-db-pro/docs/))
1. Install WP Migrate DB Pro.
1. Go to administrator page `Tools > WP Migrate DB Pro`.
1. Enter in serial for WP Migrate DB Pro on Settings tab.
1. Install the Media Addon from the Addons tab.
1. Retrieve the Connection Info from the production/staging site's Settings tab.
1. On the Migrate Tab click on add a new migration.
1. Choose Pull and enter the Connection Info from the production/staging site
1. Under Advanced Options
	- Check all of the options. **Make sure you know what you are checking in case there has been a change.**
1. Check Backup the local database before replacing it and to backup all tables
1. Check Media Files
	- Select Compare remote...
	- Check Remove local media...
1. Check Save Migration Profile
1. Click Migrate & Save Profile

### Git Setup (Tower)
1. If repository is on Beanstalk check what directory the Git root. In Beanstalk go to repo then choose the browse tab.
1. Delete all files in the git root or make new directory. You will need a file to make an inital commit with so you can leave the `index.php` or just use the `.DS_Store`.
1. Add new repository in Tower.
1. Rename repository to your site name.
1. Go into repository and make an inital commit, this will be deleted in a minute so do not worry about what is in it.
1. Add a remote to the repository.
	- Remote URL for Beanstalk is on beanstalk repository page.
	- Remote URL for WP-Engine production git@git.wpengine.com:production/sitename.git and for staging git@git.wpengine.com:staging/sitename.git
1. Pull remote develop branch to your local branches
1. Change local branches from master to develop
1. Delete local master branch
1. Pull remote master onto your local branches.