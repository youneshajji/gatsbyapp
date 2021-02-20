module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('../node_modules/gatsby-plugin-sentry/gatsby-browser.js'),
      options: {"plugins":[],"environment":"production","enabled":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gyldendal","short_name":"Gyldendal","icon":"src/images/Gyldendal-logo.webp","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e189b3204493be422cb05b9cd1716f16"},
    },{
      plugin: require('../node_modules/gatsby-theme-i18n-react-i18next/gatsby-browser.js'),
      options: {"plugins":[],"langKeyDefault":"nb","prefixDefault":"true","locales":"./src/i18n/react-i18next","i18nextOptions":{"ns":["translation","404"]}},
    },{
      plugin: require('../node_modules/gatsby-theme-i18n/gatsby-browser.js'),
      options: {"plugins":[],"defaultLang":"nb","configPath":"C:\\GIT\\Gyldendal\\minside\\src\\i18n\\config.json"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gdpr-cookies/gatsby-browser.js'),
      options: {"plugins":[],"facebookPixel":{"pixelId":"","cookieName":"gyldendal-gdpr-facebook-pixel"},"environments":["production","development"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
