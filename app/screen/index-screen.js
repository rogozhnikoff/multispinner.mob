define(["base/screen", "text!template/index-screen.hbs"], function (Screen, template) {
  return Screen.extend({
    tpl: template,
    className: "screen screen_index",
    init: function () {
      this.render({tools: this.options.tools.getData()});
    }
  });
});