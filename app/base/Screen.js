define(["backbone", "handlebars"], function (Backbone, Handlebars) {
  return Backbone.View.extend({
    // удобный метод для всяких jquery колбеков
    callback: function (method) {
      return _.bind(this[method], this);
    },
    initialize: function(){
      this.parts = [];

      this.delegateEvents(_(this.events || {}).extend({
        "click .item": "itemClick"
      }).value());

      this.init();
    },
    itemClick: function (ev) {
      var target = $(ev.target);
      // TODO: как это переписать?
      if (!target.is("a") && !target.closest(".btn").length) {
        window.location.hash = target.closest(".item").data("href");
      }
    },

    // пустой темплейт, на всякий пожарный
    tpl: "oops, something broken =(",
    getTemplate: function () {
      this.template = this.template || Handlebars.compile(this.tpl);
      return this.template;
    },
    render: function (source) {
      return this.$el.html((this.getTemplate())(source || {}));
    },
    destroy: function(){
      this.undelegateEvents();
      this.remove();

      // удаляем части
      _(this.parts).each(function(part){
        part.destroy();
      });

      delete this;
    }
  });
});