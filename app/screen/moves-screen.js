define(["base/screen", "text!template/moves-screen.hbs", "text!template/move__tracker.hbs"], function (Screen, template, templateTracker) {
  return Screen.extend({
    tpl: template,
    className: "screen screen_moves",
    events: {
      "click .move__track": "trackInit"
    },
    init: function () {
      var moves = _(this.options.moves).map(function(move){
        var timePercent = move.getTimePercent();
        return _(move.attributes).extend({
          timeDiff: move.getTimeDiff(),
          timePercent: timePercent,
          isOver: timePercent >= 100
        }).value();
      }).value();

      this.render({
        moves: moves,
        toolId: this.options.toolId,
        toolName: db.tools.get(this.options.toolId).get("name")
      });
    },
    // TODO: вынести в отдельную вьюху
    trackInit: function (ev) {
      var move = $(ev.target).closest(".move");
      var layer = $(Handlebars.compile(templateTracker)({}));
      layer.appendTo(move);

      var slider = move.find(".js-slider__el"),
        input = move.find(".js-slider input[type=hidden]"),
        visual = move.find(".js-slider .badge span"),
        form = move.find("form");

      slider.slider({
        value: parseInt(input.val()),
        min: 0,
        max: 360,
        step: 5,
        slide: function (ev, ui) {
          var value = ui.value;

          visual.text(value);
          input.val(value);
        }
      });

      form.bind("submit", _.bind(function (ev) {
        ev.preventDefault();
        console.log('move.data("move-id")', move.data("move-id"));
        var model = db.moves.get(move.data("move-id"));
        var timeTracked = model.get("timeTracked") || 0;

        model.save({
          timeTracked: timeTracked + parseInt(input.val())
        });

        // уничтожаем слайдер
        slider.slider("destroy");
        form.unbind();
        layer.remove();

        // перезагружаем
        router.refresh();
      }, this));
    }
  });
});