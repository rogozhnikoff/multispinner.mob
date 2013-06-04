define(["base/screen", "text!template/moves-screen.hbs"], function (Screen, template) {
  return Screen.extend({
    tpl: template,
    className: "screen screen_moves",
    initialize: function () {
      var data = _(this.options.moves).pluck("attributes").value();
      this.render({moves: data});
    }
  });
});