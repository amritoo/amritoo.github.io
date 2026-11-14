---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there, there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

{% comment %}Items with `sitemap: false` (set in _config.yml defaults) are hidden here too.{% endcomment %}

<h2>Pages</h2>
{% for post in site.pages %}
  {% if post.sitemap == false %}{% continue %}{% endif %}
  {% include archive-single.html %}
{% endfor %}

{% assign visible_posts = site.posts | where_exp: "p", "p.sitemap != false" %}
{% if visible_posts.size > 0 %}
<h2>Posts</h2>
{% for post in visible_posts %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% assign visible_docs = collection.docs | where_exp: "d", "d.sitemap != false" %}
  {% if visible_docs.size > 0 %}
  <h2>{{ collection.label }}</h2>
  {% for post in visible_docs %}
    {% include archive-single.html %}
  {% endfor %}
  {% endif %}
{% endunless %}
{% endfor %}
