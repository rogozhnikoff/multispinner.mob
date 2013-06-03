define(["base/view", "text!template/index-screen.hbs"], function (View, template) {
  return View.extend({
    tpl: template,
    initialize: function () {
      this.render({tools: this.options.tools.getData()});
    }
  });
});