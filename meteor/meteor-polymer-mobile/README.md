# Meteor Polymer mobile
Test of Meteor with Polymer to build a cross-plaform application for web and mobile

Demo: http://polymer-mobile.meteor.com/

## Installation
Clone the repository http://github.com/appshore/meteor-polymer-mobile

Add Meteor package(s)
```
meteor add iron-router
```

Install Polymer components with [bower](http://bower.io/)

Check the config files bower.json and .bowerrc
```
bower install
```

## Running on your computer
Start the Meteor server
```
meteor
```
From your browser
```
http://localhost:3000
```

## Running on meteor.com
Deploy the application on Meteor server
```
meteor deploy your-own-subdomain.meteor.com
```
From your browser
```
http://your-own-subdomain.meteor.com
```
or 
```
meteor run --mobile-server polymer-mobile.meteor.com
```
or 
```
meteor run --mobile-server your-own-subdomain.meteor.com
```

## Running on Android or IOS mobile with Cordova

### Android device (usb)
Local server
```
meteor run android-device
```

Meteor server
```
meteor run android-device --mobile-server polymer-mobile.meteor.com
```
or 
```
meteor run android-device --mobile-server your-own-subdomain.meteor.com
```
### IOS simulator
Local server
```
meteor run ios
```

Meteor server
```
meteor run ios --mobile-server polymer-mobile.meteor.com
```
or 
```
meteor run ios --mobile-server your-own-subdomain.meteor.com
```
### Build
Follow instructions from [Meteor Tutorial > Running on mobile](https://www.meteor.com/try/7) to build.

## Trigger a notification from Mongo shell
```
use meteor;
db.notifications.insert({name: 'Not 1'});
```
Check the app

## Issues

### Installation

Vulcanization seems to break the mobile build. The package differential:vulcanize previously added has been removed for the time being. 

### Import of Polymer and webcomponents

Mobile build is very picky how polymer and web components files are imported. Check client/core/imports.html file for Polymer/webcomponents import.

### Bugs in Polymer

in lib/layout.js there is a workaround (dropdownHeightBug) for a bug in Polymer:paper-dropdown. Workaround works only in some cases so we used a paper-dialog instead of a paper-dropdown in core/notifications.* to handle reactive updates.

