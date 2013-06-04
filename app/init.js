requirejs.config({
  baseUrl: "./app/",
  paths: {
    jquery: "vendor/jquery-2.0.2",
    underscore: "vendor/lodash-1.2.0",
    backbone: "vendor/backbone-1.0.0",
    handlebars: "vendor/handlebars-1.0.rc.4",
    text: "vendor/require-text-2.0.6",
    localstorage: "vendor/backbone-plugin/backbone.localstorage",
    bootstrap: "vendor/bootstrap/",
    jqpp: "vendor/jquerypp/"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    handlebars: {
      exports: "Handlebars"
    }
  },

  // выключаем кеширование
  urlArgs: "bust=" +  (new Date()).getTime()
});

require(["app", "util/db", "util/router"], function (App, Database, Router) {
  window.db = new Database;

  window.app = new App;
  window.router = new Router;
});