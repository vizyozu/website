'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8cd9f04fe872f1aea37705d31812b95d",
"index.html": "0eeec7b81ac92c0536504d04acb58460",
"/": "0eeec7b81ac92c0536504d04acb58460",
"main.dart.js": "defcee29d56dd656df175c0365e564d4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4371a305ff0422f413ae4692f1bfe88b",
".git/ORIG_HEAD": "ff34e211b96f9ce0e24ff1ddbc21dddb",
".git/config": "b6f4db9b8a27fb67e02aaecd2e7abcf0",
".git/objects/95/2b3cbc07790d6be8cd7ad52122712390e27eb8": "89242d15f7afc3d2baa3f43070b5454a",
".git/objects/9b/be58abf5172e5b24ee1b20ef2a014bfbf8ebd8": "2f157928e86c597d7a766664972a6842",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/bc4eb008e98f7187e5e00f9c30848465a8e704": "90a8373492a85bd279b61da2cd9ec67d",
".git/objects/33/198cef8ad49858fd3ddb4d827f1229c26ca7c4": "f79c215154d5656c1fd4ec9b52d1ea34",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/da/3e8c88cbd960c35b6887bc0f854fb281251e5f": "a754c8f3c5cbf32006ed9465fd8cb25a",
".git/objects/a5/971ff546a5fca69545330da43efcd387f0bfb1": "fb84cb00a62e27ee07d850766b6bebd1",
".git/objects/d1/ca5290a7d4fda5f4c83377bc688a98bcb95318": "07cc683b224e96897ecb5765a3729b27",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7278adffaf9eaf5ec6f8bdb74a696662573b5a": "c68fe02e8a0d127141b7419c8b61a643",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/e3434773ae1f3140553743712078493dce7682": "675bdc7234652705e0bca21fab29c4e0",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/58384bbcb3101a7d1e6f71eb7c54a1d519d472": "5152ed53ae8431e0466938ed3e2971d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/ff5ca16ff3d4e462a2e74c3093c61797d32b46": "d3ca648fd71be1f04b968d8ce9cee571",
".git/objects/fc/96256603ca57553c6c6d362535e954c6dddff4": "8b63e2008495fb11832c7bf640b3029b",
".git/objects/e3/263e7fea383456ce87750573b86666544d8454": "a9ee7743e3e343e242e5e31414f3473d",
".git/objects/20/ae3bb0f4a139ee654594e1a30757b2edabdb84": "3ce70c16472cb8c860dec387e7597fe5",
".git/objects/27/435a2a63de0991e1b60229f215b52dec4ce30b": "217e43a48cc9122f47df149a0c2cb0e1",
".git/objects/7c/3451fa1f7b558accf2b3e387ee35535d55c282": "868d06830033c5ebaf86d8f4f62cc441",
".git/objects/89/f1190fd3ab39136f8b2ddf453a54ac8606f069": "2979ed7e4fa41ee39e583bde8f033aac",
".git/objects/89/4d68eee453df8d1531ae500edc212902e174af": "aa6eff311ef8a851309cf23abfc2a31e",
".git/objects/8f/f90faa7e6316b3f44baeb3c7a996f424cac1da": "7a94948b1473b00ec36ec6ea3a84cc38",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/ebf7eb75ba0fe3b451936c6931a8124db9e117": "6c3fd6fddad411ae4a66fcad15d4a809",
".git/objects/21/6ae41b72d0ad26f44f75489cde98bf99df9cb6": "de11eb8d1510a4b5af420676835e1575",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/91/51e206963f943faea0799f29602decd8a07b21": "9684ae064a5ab702957c653cd0bd6e10",
".git/objects/96/3628f21155cab2ce97cb35ff1754c3a3af76fb": "87780e52a1e270f6ee536655de554223",
".git/objects/98/d4122c7c9e02bc55470bcfb8328abfc7253e84": "3878e65e9bad590db95d59a77b049de2",
".git/objects/30/c19f0b288c641c79cb576aec214908a7ee735c": "e4594fa4aa0d484f3399e1e27ad05b7a",
".git/objects/5b/9978701dfde88aaaa155ed5fc80b6872959430": "18a57d21b6b2dd37d04996213e4cf9ae",
".git/objects/63/6ec9a1b2876933c0051756e10dbc1b3b22964f": "0225574312eb234c2aad5745d2fd46e1",
".git/objects/64/4c88cb7053d79b2841873ca1be9502765b045e": "acfcc53cd5dc372b2c3824c272365c47",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d4/63c94b97ed5add783e83d806e6d59891db7b6a": "7ffe32d2885ea8a79d8644faa78c0066",
".git/objects/ba/e6a5dbe9ae1deffd92f9839c705442f23632c6": "ed50fec112e04ce5e1e1da58f6c2efe0",
".git/objects/b6/9f816841c0eb56757b58de07201b91315a7663": "42626e75b59191a89496d3cc84ce92e5",
".git/objects/d5/5db210b28a526c01d1e6dacb3ac529b7025b32": "6a66f0a964a98f223bcf83454c139bc3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6cd4c8cbb2f98d12f133ddf9ede612054f8a44": "865d4cefdee841a9c45f9cecfe058bb7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/3f0ab8f12a73587f1559559134145149921c37": "f22b96864691199f762ded796214ee03",
".git/objects/f0/256de9888bc3c7d9037356a0c2f70b732565c6": "96065bc51fadacc026d1fad834310efe",
".git/objects/cb/62e2555ab22bc133c16901a9b8519303d44b9f": "99e68ead5540e800d66f3c3885c77502",
".git/objects/cb/cc353e2d1fabb19b5e7ac9d8195de52a6e85b8": "e78799fc9070c6839cdede269a897678",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8d/7765931ae9ac8d465a0dfe2da488a75fd01c29": "471d9f2abbf05c00ed58dd231534ff19",
".git/objects/8d/c00ad87519ed112a7d1188bf2d7bbfc4dcd5e1": "b6134b6b01c9ee163961296b23c57d45",
".git/objects/82/99c812ae19af46daad2d7ce7b70b92199d7c32": "008d86f779f119cdb7d905becab4eff9",
".git/objects/2b/34ea7ac1e5bc08d1d64cb8b57b5dc2f82ded91": "183b5547a367dae224c404f526067479",
".git/objects/78/40461cf35e9323aa2d4cb438c8ba60c6fec8c9": "7298d82104da5a1ef8c80017a246cd94",
".git/objects/14/f2333b2e35efc315800691c1ad87b8500f42c0": "0be200434b4d42337077303f25b86ebf",
".git/objects/25/e9f78f8061636d8146e39f87a6b5e009b5029b": "61e63918e92ad97a682d585874d3e516",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "bfc871ace03e6191f986284fd0da8f1e",
".git/logs/refs/heads/main": "bfc871ace03e6191f986284fd0da8f1e",
".git/logs/refs/remotes/origin/main": "86bd04223a40d49a9d4e9e3078728093",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0492f3a3801a003ce86ee4ebf8bf7f45",
".git/refs/remotes/origin/main": "0492f3a3801a003ce86ee4ebf8bf7f45",
".git/index": "591b2d41c2f03a84baa4ac8d384bcf4d",
".git/COMMIT_EDITMSG": "46db34578445af7accc03362408e4c2e",
".git/FETCH_HEAD": "d84082d25c5e559dd10d1375b1a404b4",
"assets/AssetManifest.json": "61c8c623c5c63c30ad2dbdc56f2a3793",
"assets/NOTICES": "04b56e6a08481030aec6be2a9ebf9267",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/yozu.jpeg": "c3e6e700facb9f47c04847ebcf89d1a1",
"assets/assets/yozu.jpg": "48f9de2cf360c61cb3a07a47616f3b2f",
"assets/assets/videos/Acceleration_Motion.mp4": "00916f18fee8b39ae6ff53918ec5bd85",
"assets/assets/videos/Reflection_Memorise.mp4": "817185bec8ef14b50462de35d6347d45",
"assets/assets/videos/Mass_Weight_Physics.mp4": "a28e96d65eaf942ca5cfd39672e01c64",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
