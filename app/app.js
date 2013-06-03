define(["base/view", "text!template/container.hbs"], function (View, template) {
  return View.extend({
    tagName: "div",
    className: "container",
    tpl: template,
    initialize: function () {
      this.$el.appendTo("body");

      this.render();

      this.region = {
        head: this.$(".container__head"),
        side: this.$(".container__side"),
        screen: this.$(".container__screen")
      }
    },
    events: {

    },
    changeScreen: function(args){
      // чистим текущий screen
      this.region.screen.empty();
      delete this.screen;

      // вставляем
      this.region.screen.html(args.screen.$el);
      // перезаписываем новый
      this.screen = args.screen;
    }
  });
});