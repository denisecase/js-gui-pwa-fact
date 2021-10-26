# js-gui-pwa-fact

> Progressive web apps (PWA) are responsive, fast, available offline, and allow your users to install them on their mobile devices - just add icons, manifest.json, and service-worker.js.

## Links

- [Demo](https://denisecase.github.io/js-gui-pwa-fact/)
- [Source](https://github.com/denisecase/js-gui-pwa-fact)

## Requirements

- A browser (e.g., Bing or Chrome - Bing Lighthouse works better!)
- A text editor (e.g., VS Code or Notepad++)
- A favorite API (a service that will respond to requests)
- Host the site with GitHub Pages

## No More Serving with VS Code Live Server

Due to path changes when hosting with GitHub Pages this version will not work with Live Server. (We would have to autogenerate the manifest file depending on host - see scope and start_url.)

## Web App to PWA - How To

- Create manifest.json to provide information about your app.
- Create favicons and icons (users can install a PWA on their devices)
- Create service-worker.js
- Add index.html links and icons to manifest.json
- Add index.html script to register a service worker running independently, capable of intercepting all fetch requests and adjusting for offline, caching, and more

## Workbox - Help for Service Workers

- [Workbox](https://developers.google.com/web/tools/workbox) - PWA Libraries
- [Workbox Caching Strategies](https://developers.google.com/web/tools/workbox/modules/workbox-strategies)

## Creating PWA Icons

PWA can be installed. We need a lot of icons to handle all different devices.

### 1. Create Initial Favicons

Basic icon built with [Favicon.io](https://favicon.io)

- Text: :)
- Background: Circle
- Font family: Farro
- Font size: 110
- Color: #FFFFFF
- Background: #006747

Download and save/expand zipfile in images folder.

### 2. Create Maskable Icon(s)

- Create at least one maskable icon. 
- [Maskable.app Editor](https://maskable.app/editor) will do this online from an existing icon.  

### 3. Create Apple Touch Icons

- Create Apple Touch Icons. 
- [Apple Touch Icon Generator](https://manytools.org/http-html-text/apple-touch-icon-generator/) will do this online from an existing icon. 

## Audit

- Score your app with Lighthouse. Right-click / Inspect / Lighthouse tab (very last one). 
- Bing provides faster, better results. Chrome works, too. 

## Trouble-shooting

- [Inspect the cache](https://developers.google.com/web/tools/chrome-devtools/storage/cache) - many service-worker issues can be helped with right-click / Inspect / Application tab.  Explore the cache. [Click "clear storage"](https://developers.google.com/web/tools/chrome-devtools/storage/cache#deletecache) to delete all cached content. 
- [Add to Home Screen Criteria](https://developers.google.com/web/fundamentals/app-install-banners/#criteria) - your app must meet the add to home screen criteria in order for the 'beforeinstallprompt' event to be fired and your app installed.
- Android Trouble-shooting. If you delete your PWA, it goes to App Trash and you can't reinstall while its there. Delete another app to get the App Trash prompt, go to App Trash, select the PWA, and delete it. Now you can reinstall. 
- [iOS Troubleshooting](https://blog.expo.io/enabling-ios-splash-screens-for-progressive-web-apps-34f06f096e5c) - Enabling iOS Splash Screens for Progressive Web Apps

## See Also

- [Inspect Registered Service Workers on your machine](chrome://serviceworker-internals/?devtools)
- [Inspect may move here later](chrome://inspect/#service-workers)
- [Service Workers - Overview](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Service Workers - Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
- [How to Add Maskable Icon](https://web.dev/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools#how-to-add-maskable-icon-support-to-your-pwa)
