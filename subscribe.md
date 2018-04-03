---
title: Subscribe
excerpt: Subscribe to get the latest updates by email or via the RSS feed.
---
Probably the simplest way to get updates is to <a href="https://app.feedblitz.com/f/f.fbz?track={{ site.url | append: '/feed/' | cgi_escape }}" target="_blank">subscribe by email (using feedblitz)</a>.

All methods of subscribing (including email subscriptions) make use of this site's [RSS feed](/feed/). If you're not familiar with this, you can read about RSS, or 'Really Simple Syndication', on [Wikipedia](https://en.wikipedia.org/wiki/RSS). Basically, most blogs and news sites provide an RSS feed (or an Atom feed). There are numerous services and apps that will collect together all your feeds, so you can easily see when there is a new post on one of your favourite sites.

Personally, I use [Feedly](https://feedly.com/) to keep track of my RSS feeds. If you're a Feedly user, <a href="https://feedly.com/i/subscription/feed/{{ site.url | append: '/feed/' | cgi_escape }}" target="_blank">click here to add to Feedly</a>.

If you use another service, you might be able to find a convenient link via <a class="a2a_dd" href="http://www.addtoany.com/subscribe?linkurl={{ site.url | append: '/feed/' | cgi_escape }}&amp;linkname={{ site.name | cgi_escape }}">AddToAny</a>.

Otherwise, right click on this [RSS feed link](/feed/), copy the link address, and paste it into whichever service you use.

<!-- AddToAny BEGIN -->
<script type="text/javascript">
  var a2a_config = a2a_config || {};
  a2a_config.linkname = "{{ site.name }}";
  a2a_config.linkurl = "{{ site.url }}/feed/";
</script>
<script type="text/javascript" src="//static.addtoany.com/menu/feed.js"></script>
<!-- AddToAny END -->
