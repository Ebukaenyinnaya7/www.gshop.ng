
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.aefe7110e651bb9162f3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.latest.en.0f3a7b9b8069516cd93c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3813.latest.en.4992841099912fcfb4ca.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5816.latest.en.62966691cce79d1ce69d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.2a4346d20fdf9cdaa30e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4100.latest.en.8e7cc044415897fd13ea.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3147.latest.en.3a16d59bfcacf6e33290.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/794.latest.en.f8a7f2bbf7aef3e0f8bf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4328.latest.en.a4ff9c275a6626fb56bb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/648.latest.en.6b4433a15ebf6afd5bde.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1294.latest.en.bca2f6cb72f65e0a55c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8024.latest.en.06d436106f4515657027.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8217.latest.en.b3bf2852be394153030e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.d65f3de7a3aff1cdf51b.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9480.latest.en.520a79dd3a3eb9e62c75.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.a5ba0ed2da10cfd10d58.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.adb5111953bedc083ca7.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0773/4037/7385/files/supermart_web_x320.svg?v=1686659373"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  