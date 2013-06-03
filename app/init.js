require(["app", "util/db", "util/router"], function (App, Database, Router) {
  window.db = new Database;

  window.app = new App;
  window.router = new Router;
});