---
layout: post
title: "Has WP_Query Abstracted To Much?"
date: "2015-08-09 18:53"
---
I was working on a project recently where I ran into a situation where `WP_Query`, well actually it was `WP_User_Query`, just would not work. So I feel back to raw SQL through `wpdb` and to my astonishment PHPCS with WordPress coding standards discourages the use of `wpdb`. I know it is not a total out right do not use but still it feels a little weird. It got me to thinking maybe `WP_Query` abstracts too much away from the developer.

I have seen people say do not create custom tables but not a large amount of information why. I'll give you that you will receive a performance hit when joining tables so you should try to keep stuff together as much as possible. Maybe you have a "custom post type" that does not require a large amount of the