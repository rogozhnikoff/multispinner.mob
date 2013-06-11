define(["backbone", "handlebars"], function (Backbone, Handlebars) {
  return Backbone.View.extend({
    // удобный метод для всяких jquery колбеков
    callback: function (method) {
      return _.bind(this[method], this);
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
      delete this;
    }
  });
});