define(["backbone", "localstorage"], function (Backbone, Localstorage) {
  return Backbone.Collection.extend({
    name: "noname collection",
    initialize: function () {
      // создаем свой сторейдж
      this.localStorage = new Localstorage(this.name);
      // восстанавливаем из него
      this.fetch();

      // инициализируем пользовательскую функцию
      if (typeof this.init === "function") this.init();
    },

    // отдает чистые хеши аттрибутов моделей
    getData: function () {
      return _(this.models).pluck("attributes").value()
    }
  });
});