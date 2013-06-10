define(["base/screen", "text!template/container.hbs"], function (Screen, template) {
  /*$(function(){
    var h = $(window).outerHeight();
    var w = $(window).outerWidth();
    $("#debug").text("высота " + h + ", ширина " + w);
    console.log('h, w', h, w);
  });*/

  return Screen.extend({
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
      if(typeof this.screen !== "undefined") {
        this.screen.destroy();
      }

      // вставляем
      this.region.screen.html(args.screen.$el);
      // перезаписываем новый
      this.screen = args.screen;
    }
  });
});