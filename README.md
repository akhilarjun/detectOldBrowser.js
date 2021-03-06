![File-Size][size-image]
![Version][version-url]

# detectOldBrowser.js
This is a plugin with small footprint that will help in determining if the browser is out dated or not. It also has a feature to configure the supported browser version for your application. 

### Steps

Include the js file into your page

```html
<script src='https://cdn.jsdelivr.net/gh/akhilarjun/detectOldBrowser.js@v1.0/js/detectOldBrowser.min.js'></script>
```

And now use the boolean method to check if the browser you are using is outdated or not.

```javascript
//Edited For Brewity
if(isBrowserOld()){
  // Notify the user that browser is old
}
```

You can also use the following method to get to know which browser are you using

```javascript
var browser = get_browser();
console.log(browser.name,browser.version);
```

#### API

If your application supports older browsers upto a certain version number, you can configure it in the following way

```javascript
minimum.IE = 9;
```

The supported browsers by the plugin is

```javascript
minimum = {
    IE : 11,
    CHROME : 50,
    FIREFOX : 46,
    SAFARI : 5,
    OPERA : 37
}
```

A big thanks to the [Stackoverflow Answer](http://stackoverflow.com/a/16938481/3534764) that helped in this plugin! :+1:

[version-url]: https://img.shields.io/github/v/release/akhilarjun/detectOldBrowser.js?label=Release&style=flat-square
[size-image]: http://img.badgesize.io/akhilarjun/detectOldBrowser.js/master/js/detectOldBrowser.min.js.svg?compression=gzip&style=flat-square&label=Minified%20And%20Gzipped%20Size
