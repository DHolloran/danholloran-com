---
title: Setting up Mailhog on MAMP
layout: post
---
[Mailhog](https://github.com/mailhog/MailHog) is a tool that allows all of your outgoing mail to be intercepted. This is great for your development environment since you may need to test things incrementally. 

I know a lot of the cool kids are setting up Mailhog along with other develop items to [Vagrant](https://www.vagrantup.com/) which I will use sometimes as well. However we still use [MAMP](https://www.mamp.info/) at work building mainly WordPress sites and I could not find a write up on how to get Mailhog setup on MAMP. 

This tutorial could be adapted to almost any environment since Mailhog is written in [Go](https://golang.org/) and is available on multiple platforms. I may end up needing to figure out how to set it up on [Laravel Valet](https://laravel.com/docs/valet). I am trying it out on a small scale and may switch full time to it eventually.

So lets get started setting up Mailhog on MAMP. You can install Mailhog through [Homebrew](http://brew.sh/).
{% highlight bash %}
$ brew install mailhog
{% endhighlight %}

To start Mailhog when OSX boots up you can use [Homebrew Services](https://github.com/Homebrew/homebrew-services).
{% highlight bash %}
$ brew services start mailhog
{% endhighlight %}

You should now be able to access Mailhog on [http://127.0.0.1:8025/](http://127.0.0.1:8025/)

Edit sendmail_path in `/Applications/MAMP/bin/php/{PHP_VERSION}/conf/php.ini` to be `sendmail_path = /usr/local/Cellar/mailhog/{VERSION}/bin/MailHog sendmail test@test`. {VERSION} can be found by `$ls /usr/local/Cellar/mailhog/` then the folder in there will be the {VERSION} value. As of this writing 0.2.0 was the latests version.

Restart MAMP to make sure our changes take effect and fire off a test email. Now if you visit [http://127.0.0.1:8025/](http://127.0.0.1:8025/) you should see your test email. That is all there is pretty simple.

For servers such as managed WordPress hosting like [WP Engine](https://wpengine.com/) to where you can not install Mailhog take a look at [Mailtrap](https://mailtrap.io/). It does everything Mailhog can do and more. Once you sign up for a Mailtrap account they give you simple example code to add to your project for many different languages and frameworks.


