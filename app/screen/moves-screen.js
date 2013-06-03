define(["base/view", "text!template/moves-screen.hbs"], function (View, template) {
  return View.extend({
    tpl: template,
    initialize: function () {
      var data = _(this.options.moves).pluck("attributes").value();
      this.render({moves: data});
    }
  });
});