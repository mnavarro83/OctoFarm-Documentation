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
    "revision": "82e6d89822d94a763f3d8dfbf5a6d4ef"
  },
  {
    "url": "api/index.html",
    "revision": "68ba419f116240b7177fbe87312666c7"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/octoprint-cors.9615af97.png",
    "revision": "9615af97e5caaac9ad2195545ead330a"
  },
  {
    "url": "assets/img/power-psucontrol.4bc2814f.png",
    "revision": "4bc2814f821c75f31d945f0c49a0ebd7"
  },
  {
    "url": "assets/img/power-tasmota.56cf72cb.png",
    "revision": "56cf72cb12e8d84e404305a6960198b5"
  },
  {
    "url": "assets/img/power-tplink.03283c4e.png",
    "revision": "03283c4e61a6178cb57337c282191ac1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.261f954b.js",
    "revision": "1153d8ca73d80c297ad815af94b9083f"
  },
  {
    "url": "assets/js/11.a44fc9fd.js",
    "revision": "4d29b8b289c2c14bdfcbc42179e582e3"
  },
  {
    "url": "assets/js/12.e22832b5.js",
    "revision": "552977cce4c933a544413ed0f0dd278b"
  },
  {
    "url": "assets/js/13.73ec3a66.js",
    "revision": "313699d6b95260cdb7b9c1cf83d3cc0f"
  },
  {
    "url": "assets/js/14.daa3f4a0.js",
    "revision": "c8ce426f2657bf4249e48a15ac0ee436"
  },
  {
    "url": "assets/js/15.6a45dbd6.js",
    "revision": "b61fb723fec1c5a5f7d069a2841ff7a7"
  },
  {
    "url": "assets/js/16.955128cb.js",
    "revision": "13f09aac88cca7eaddb4a5a7495efbc1"
  },
  {
    "url": "assets/js/17.19f24dc8.js",
    "revision": "0d7f9383c83d42a1feddcab7c55c1883"
  },
  {
    "url": "assets/js/18.b6d39cc0.js",
    "revision": "7fa5d9c94d7efd160e99564e374022de"
  },
  {
    "url": "assets/js/19.5c66b6cf.js",
    "revision": "75b1292261fe7cb843bcd7d8e7acdb86"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.5c3d0d74.js",
    "revision": "08e31addf036394cb0dc4ec470d962f1"
  },
  {
    "url": "assets/js/21.3e9335c4.js",
    "revision": "c76abec8099e927e5791e099b123657c"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.4a886ec7.js",
    "revision": "a61b8fc1c4810f4954e41db8c85d033b"
  },
  {
    "url": "assets/js/24.19fd1ec4.js",
    "revision": "12533ba94436a25d4a43cff19418bf6d"
  },
  {
    "url": "assets/js/25.856c9d04.js",
    "revision": "5131dfa0903b4ad938e2ed76bfe7a60b"
  },
  {
    "url": "assets/js/26.03f91e4d.js",
    "revision": "8e1e5a2a0c79e4ffb3b48a05e5075fc4"
  },
  {
    "url": "assets/js/27.175c12ae.js",
    "revision": "bdb98d13a87c22f553f3b4994c1844fa"
  },
  {
    "url": "assets/js/28.f94721e7.js",
    "revision": "07c9608dd38eab2701abb16200e2ecb6"
  },
  {
    "url": "assets/js/29.3ab3567c.js",
    "revision": "d508987d7c59d565748249574f14817d"
  },
  {
    "url": "assets/js/3.307549ba.js",
    "revision": "c6dcf7e1633f7935b701deb92a1d7fcc"
  },
  {
    "url": "assets/js/30.c63a3834.js",
    "revision": "ed5ecbe8925f7c28ee1578b2cb61e4a8"
  },
  {
    "url": "assets/js/31.ca5d273e.js",
    "revision": "80fd222157c3482553fdeea07143d98e"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.35354b5a.js",
    "revision": "c1d261aff56bc1e49725f166d9d1df4b"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.2eeeb5ce.js",
    "revision": "d0276410ab70cef8049c96c90d9bae8f"
  },
  {
    "url": "assets/js/9.e3a3c066.js",
    "revision": "0a7ca676412ba88c6fcfe334e217421f"
  },
  {
    "url": "assets/js/app.d94fa46e.js",
    "revision": "ed633f60643cf9d3b9158d8b13885ec2"
  },
  {
    "url": "contributing/index.html",
    "revision": "8c0cdc7071fe630a3475ecf3661c7112"
  },
  {
    "url": "getting-started/index.html",
    "revision": "b4da66a27be9db74fd0b5217d5404db9"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "4a83619a8fe17b79e46359a296215d73"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "2514c00b358cea6d12cd8f5dde9a680f"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "99af8b1a689e5610d8c7a4b2a8c71701"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "e15c8c3a4f06bac3514bdb31b959d49c"
  },
  {
    "url": "getting-started/octofarm-updating.html",
    "revision": "5d54fe945afbc0c7b4dcdceced23a6fc"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "3420f319869aab0c9e22cdb297af1a76"
  },
  {
    "url": "guides/index.html",
    "revision": "1e17046d15f0b949491b6545c430a9d5"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "73414734c770a6db454ad8ee33c1c630"
  },
  {
    "url": "guides/octoprint-supported-plugins.html",
    "revision": "f321b69b9076695a761f9cd810538a6b"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "392157b82e8646eb53779142338d9b5a"
  },
  {
    "url": "installation/index.html",
    "revision": "e8d421ba3e1f918c8994b8412b0f5d50"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "46b01c4bd1d352ca3be3c9523a30bd52"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "e7a46bda33267ad700cfcd7ccf56f53f"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "8a988f3c7772bba5878a7770574fed44"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "27e547f91b6c46f52a3ded99b1bce1cc"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "909e0d4ae8598ddfffa6cb8ee3aa670f"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "4381c65c527fb267797c3d0305ed8804"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
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
