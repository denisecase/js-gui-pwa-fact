# js-gui-pwa-fact

> Progressive web apps (PWA) are responsive, fast, available offline, and allow your users to install them on their mobile devices - just add manifest.json and  service-worker.js.

## Links

- [Demo](https://profcase.github.io/js-gui-pwa-fact/)
- [Source](https://github.com/profcase/js-gui-pwa-fact)

## Requirements

- A browser (e.g., Firefox or Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)
- A favorite API (a service that will respond to requests)
- Web Server for Chrome Extension (or view the [Demo](https://profcase.github.io/js-gui-pwa-fact/))

## IMPORTANT! Serve the app to use fetch

We can't serve as a local file and use fetch, so host the app locally with [Web Server for Chrome Extension](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)

## App to PWA

- Create manifest.json to provide information about your app.
- Create favicons and a full set of icons (users can install a PWA on their devices)
- Add index.html links to manifest and icons
- Add index.html script to register a service worker running independently, capable of intercepting all fetch requests and adjusting for offline, caching, and more
- Create sw.js (or service-worker.js)

## API

- [Chuck Norris Jokes](http://api.icndb.com/jokes/random?limitTo=[nerdy])

## Coding References

- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSON.parse to object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## Styles

- [Bootstrap Material Design CDN](https://mdbootstrap.com/md-bootstrap-cdn/)
- [Bootstrap 4.3 - Sticky Footer](https://getbootstrap.com/docs/4.3/examples/sticky-footer/)
- [Bootstrap 4.3 - Colors](https://getbootstrap.com/docs/4.3/utilities/colors/)

## Icons

PWA can be installed. We need a lot of icons to handle all different devices.

### Create Initial Favicons

Basic icon built with [Favicon.io](https://favicon.io)

- Text: Fact
- Background: Rounded
- Font family: Leckerli One
- Font size: 44
- Color: #FFF
- Background: #006747

Download and save/expand zipfile in images folder.

### Create Set of PWA Icons

Full set of PWA icons built with [PWA Builder App Image Generator](https://www.pwabuilder.com/imageGenerator).  Upload one of your large favicons and update settings. Check all the boxes and save the zipfile to images. Extract.

Update icons property in manifest.json as needed (if the names are the same, it can be reused from a reference project).

### Create Additional Android Icons (optional)

- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html)

- [Stack Overflow](https://stackoverflow.com/questions/12768128/android-launcher-icon-size)

- 48 × 48 (mdpi) , with 1 dp padding
- 72 × 72 (hdpi), with 1 dp padding
- 96 × 96 (xhdpi), with 1 dp padding
- 144 × 144 (xxhdpi), with 1 dp padding
- 192 × 192 (xxxhdpi) , with 4 dp padding

## Code Formatting

- [HTML Validator](https://validator.w3.org/)
- [JavaScript Standard Style Validator](https://standardjs.com/demo.html)

## See Also

- [js-console](https://github.com/profcase/js-console)
- [js-colors](https://github.com/profcase/js-colors)
- [js-e1](https://github.com/profcase/js-e1)
- [js-gui-basic](https://github.com/profcase/js-gui-basic)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-with-tests](https://github.com/profcase/js-gui-with-tests)
- [js-gui-pwa-fact](https://github.com/profcase/js-gui-pwa-fact)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [node-server](https://github.com/profcase/node-server)
- [todo-server-jwt](https://github.com/profcase/todo-server-jwt)
- [node-express-app](https://github.com/denisecase/node-express-app)
- [node-express-chat](https://github.com/denisecase/node-express-chat)
- [node-express-mvc](https://github.com/denisecase/node-express-mvc)
- [node-express-mvc-ejs-start](https://bitbucket.org/professorcase/node-express-mvc-ejs-start)
- [node-express-mvc-ejs-passport](https://bitbucket.org/professorcase/node-express-mvc-ejs-passport)
