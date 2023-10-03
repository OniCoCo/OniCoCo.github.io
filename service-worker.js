/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8ed45642b9aee61debdd8b874dc21360"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.8710e541.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.221cd6c4.js",
    "revision": "57f4e66b245d6d20ff699d7bb95674f4"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.740d29e0.js",
    "revision": "ed1178aae3893d0a9f56c232548be0df"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.a54cff9b.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.5a3327ec.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.4370095c.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.a52f6f16.js",
    "revision": "7d7a500aed8f833049c5a63d6ed4939f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "d97fd40d845d5e99fa37894c46bd9407"
  },
  {
    "url": "categories/java/index.html",
    "revision": "67a33e683805f525ff2a20fe4a6161de"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5d214bd087ae7624432a3ea3e3273e80"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9b195a19c12f18d54fa7fd3570bdac1e"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2ce09fe26976b5db544f5c7af6cf2572"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "70d49019acf1d3924c0e32f842ea20e0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "8ce5819e3f70b036d102ccd2307c674b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c34dbada23b53ad123a060c805b37212"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "80a630a27271e75ecc257f067fb0c61c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "07b2c1b62cbbcff2ed1939cc6e0c95b4"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9f91addef75098297e69156f49af79a3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3a95ac58ad452979896c00682fee03d6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ea3b985961ea8c42c838bd552ea2ec0f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "2fe975a9929171cd74d1c17821c89b6f"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "97c3d8d73f5c5ea5882fc0b9e7355def"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b43b581241ab89dc1cd3456af1b70d43"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6199444d7f7a10fabf19b2d02cda252f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "75a42fb551a5f323154effc87fe71f2a"
  },
  {
    "url": "timeline/index.html",
    "revision": "28f0e813975dc9227dc7c062ac0c9bf5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c2e916d467969a3dfe30f74b2a35837c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "cce5a874b4f7b9d02a31f4321c830d9f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1dd0c8a2e05291d6598ecf09493178d0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ffdf4ad658b0bcf90de95d8586e2e0fc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a3fc8a133b81dafb159cb2a4d51d9e35"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
