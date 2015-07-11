---
layout: post
title: Setting Up Virtual Hosts in MAMP
date: '2015-03-17 23:46:57'
---

Setting up and maintaining Virtual Hosts(VHosts) is extremely simple in MAMP, let's get started.

Create the VHosts file in `/Applications/MAMP/conf/apache/vhosts.conf` and sdd a new VHost, using a text editor.

Change `sitename.dev` to your `sitename.extension`, I suggest using your production URL in place of sitename and .dev as the extension `productionurl.dev`.

Change `/Applications/MAMP/htdocs/sitename/` to your site directory, I suggest using `/Applications/MAMP/htdocs/productionurl.com` for your directory keeps things nice and tidy.
```
    # Change *:80 to *:8888 if not using default apache ports, this is a setting under ports MAMP uses it's own ports by default.
	
    # sitename.dev
	<VirtualHost *:80>
	ServerName sitename.dev
	DocumentRoot /Applications/MAMP/htdocs/sitename/
	<Directory /Applications/MAMP/htdocs/sitename/>
	Options Indexes FollowSymLinks MultiViews
	AllowOverride All
	Order allow,deny
	allow from all
	</Directory>
	</VirtualHost>
```
Include `vhosts.conf` in `/Applications/MAMP/conf/apache/http.conf`  
```
# Change *:80 to *:8888 if not using default apache ports

NameVirtualHost *:80
Include /Applications/MAMP/conf/apache/vhosts.conf
```

Add site to `/etc/hosts` with nano, vim, or other editor `127.0.0.1 sitename.dev`, be very carefully not to remove anything already in there unless you know what your doing.

Restart server

Access site at http://sitename.dev

 To add more sites duplicate steps add/edit example vHost and adding site to `/etc/hosts`
 
 I would also suggest creating an alias in your .{SHELL}rc file. that opens VHosts file, Hosts file and possibly an index.php in your `/Applications/MAMP/htdocs/` directory that has all of you sites in it.

```
<?php
// index.php Example

$vhosts = array(
	'sitename.dev',
);
sort( $vhosts );
?>
<ul>
	<?php foreach ( $vhosts as $vhost ) { ?>
	<li style="margin-bottom: 5px;">
		<a href="http://<?php echo $vhost ?>" style="font-size: 18px;"><?php echo $vhost ?></a>
	</li>
	<?php } // foreach() ?>
</ul>
```