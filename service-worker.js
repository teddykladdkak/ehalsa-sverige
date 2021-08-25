---
sitemap:
  exclude: 'yes'
---
"use strict";

var version = '{{ site.serviceworker.version }}';

self.addEventListener("install", function(event) {
    {%- if site.serviceworker.talk -%}console.log('WORKER: install event in progress.');{%- endif -%}
    event.waitUntil(
        caches.open(version + 'fundamentals').then(function(cache) {
            return cache.addAll([{{ site.serviceworker.files }}]);
        }).then(function() {
            {%- if site.serviceworker.talk -%}console.log('WORKER: install completed');{%- endif -%}
        })
    );
});
self.addEventListener("fetch", function(event) {
    {%- if site.serviceworker.talk -%}console.log('WORKER: fetch event in progress.');{%- endif -%}
    if (event.request.method !== 'GET') {
        {%- if site.serviceworker.talk -%}console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);{%- endif -%}
      return;
    }
    event.respondWith(
        caches.match(event.request).then(function(cached) {
            var networked = fetch(event.request).then(fetchedFromNetwork, unableToResolve).catch(unableToResolve);
            {%- if site.serviceworker.talk -%}console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);{%- endif -%}
            return cached || networked;
            function fetchedFromNetwork(response) {
                var cacheCopy = response.clone();
                {%- if site.serviceworker.talk -%}console.log('WORKER: fetch response from network.', event.request.url);{%- endif -%}
                caches.open(version + 'pages').then(function add(cache) {
                    cache.put(event.request, cacheCopy);
                }).then(function() {
                    {%- if site.serviceworker.talk -%}console.log('WORKER: fetch response stored in cache.', event.request.url);{%- endif -%}
                });
                return response;
            }
            function unableToResolve () {
                {%- if site.serviceworker.talk -%}console.log('WORKER: fetch request failed in both cache and network.');{%- endif -%}
                return new Response('<h1>Service Unavailable</h1>', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            }
        })
    );
});
self.addEventListener("activate", function(event) {
    {%- if site.serviceworker.talk -%}console.log('WORKER: activate event in progress.');{%- endif -%}
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (key) {
                    return !key.startsWith(version);
                }).map(function (key) {
                    return caches.delete(key);
                })
            );
        }).then(function() {
            {%- if site.serviceworker.talk -%}console.log('WORKER: activate completed.');{%- endif -%}
        })
    );
  });