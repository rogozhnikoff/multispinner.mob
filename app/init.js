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
    ui: "vendor/jquery-ui-1.9.2.custom",
    jqpp: "vendor/jquerypp/",
    moment: "vendor/moment/moment"
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
    },
    ui: {
      deps: ["jquery"]
    },
    moment: {
      moment: ["vendor/moment/ru"]
    }
  },

  // выключаем кеширование
  urlArgs: "bust=" +  (new Date()).getTime()
});

require(["app", "util/db", "util/router", "util/helpers", "jquery"], function (App, Database, Router) {
  window.db = new Database;

  window.app = new App;
  window.router = new Router;
});