# js-gui-pwa-fact

> Progressive web apps (PWA) are responsive, fast, available offline, and allow your users to install them on their mobile devices - just add icons, manifest.json, and service-worker.js.

## Links

- [Demo](https://denisecase.github.io/js-gui-pwa-fact/)
- [Source](https://github.com/denisecase/js-gui-pwa-fact)

## Requirements

- A browser (e.g., Firefox or Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)
- A favorite API (a service that will respond to requests)
- Host the site with [VS Code Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or [Web Server for Chrome Extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) (or view the [Demo](https://denisecase.github.io/js-gui-pwa-fact/))

## IMPORTANT! Serve the app to use fetch

We can't serve our website as a local file and use fetch, so we must host the app locally with either VS Code Live Server or Web Server for Chrome Extension.

## Serving with VS Code Live Server

After installing the VS Code Live Server, open the folder in VS Code, right-click index.html and select "Open with Live Server".

## App to PWA

- Create manifest.json to provide information about your app.
- Create favicons and a full set of icons (users can install a PWA on their devices)
- Create service-worker.js
- Add index.html links and icons to manifest.json
- Add index.html script to register a service worker running independently, capable of intercepting all fetch requests and adjusting for offline, caching, and more

## Workbox

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

### 2. Create Set of PWA Icons

Full set of PWA icons built with [Real Favicon Generator](https://realfavicongenerator.net/).  Upload your large 512x512 favicon and generate a full set. Change the settings as you like (e.g., set background color to #006747). Set icon location to /images/AppImages. Download your package.

Update icons property in manifest.json as needed (if the names are the same, it can be reused from a reference project).

### 3. Create Additional Android Icons (optional)

Then, generate a few additional icons for use on Android devices.

- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)
- [Stack Overflow](https://stackoverflow.com/questions/12768128/android-launcher-icon-size)
- 48 × 48 (mdpi), with 1 dp padding
- 72 × 72 (hdpi), with 1 dp padding
- 96 × 96 (xhdpi), with 1 dp padding
- 144 × 144 (xxhdpi), with 1 dp padding
- 192 × 192 (xxxhdpi), with 4 dp padding

## Learn More

- [The 3 parts of a PWA](https://dakotagrvtt.github.io/44-563-group-4-pwa/)
- [Web Fundamentals](https://developers.google.com/web/fundamentals/)
- [Codelabs PWA](https://codelabs.developers.google.com/dev-pwa-training/)
- [Score your app with Lighthouse](https://developers.google.com/web/tools/lighthouse) - right-click / Inspect / Audit tab (very last one). Click "Run audits".

## Trouble-shooting

- [Inspect the cache](https://developers.google.com/web/tools/chrome-devtools/storage/cache) - many service-worker issues can be helped with right-click / Inspect / Application tab.  Explore the cache. [Click "clear storage"](https://developers.google.com/web/tools/chrome-devtools/storage/cache#deletecache) to delete all cached content. 
- [Add to Home Screen Criteria](https://developers.google.com/web/fundamentals/app-install-banners/#criteria) - your app must meet the add to home screen criteria in order for the 'beforeinstallprompt' event to be fired and your app installed.
- Android Trouble-shooting. If you delete your PWA, it goes to App Trash and you can't reinstall while its there. Delete another app to get the App Trash prompt, go to App Trash, select the PWA, and delete it. Now you can reinstall. 
- [iOS Troubleshooting](https://blog.expo.io/enabling-ios-splash-screens-for-progressive-web-apps-34f06f096e5c) - Enabling iOS Splash Screens for Progressive Web Apps

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
- [Inspect Registered Service Workers on your machine](chrome://serviceworker-internals/?devtools)
- [Inspect may move here later](chrome://inspect/#service-workers)
- [Service Workers - Overview](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Service Workers - Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)