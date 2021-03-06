define(["base/screen", "text!template/move-screen.hbs", "part/radio", "jqpp/dom/form_params", "ui"], function (Screen, template, Radio) {

  return Screen.extend({
    tpl: template,
    className: "screen screen_move",
    events: {
      "submit": "submit",
      "click .sourceHelper .label": "sourceClick"
    },
    init: function () {
      var type = this.options.move.get("type");
      var know = this.options.move.get("know");
      this.tool = db.tools.get(this.options.toolId);

      this.render({
        move: this.options.move.attributes,
        toolName: this.tool.get("name"),
        isNew: this.options.move.isNew(),
        type: {
          isMove: type === "move",
          isPack: type === "pack"
        },
        know: {
          isLearn: know === "learn",
          isWork: know === "work"
        },
        sourceHelper: _(db.moves.pluck("source")).uniq().without(null, "").value()
      });

      this.timeSlider();

      var parts = this.parts;
      this.$(".radioCtrl").each(function(){
        parts.push(new Radio({el: $(this)}));
      });
    },
    timeSlider: function(){
      var slider = this.$(".js-slider__el"),
        input = this.$(".js-slider input[type=hidden]"),
        visual = this.$(".js-slider .badge span");

      slider.slider({
        value: _(db.times).indexOf(parseInt(input.val())),
        min: 0,
        max: db.times.length - 1,
        slide: function(ev, ui){
          var value = db.times[ui.value];

          visual.text(value);
          input.val(value);
        }
      });
    },
    submit: function (ev) {
      ev.preventDefault();

      var isNew = this.options.move.isNew();

      // сохраняем в модель
      this.options.move.save(this.$("form").formParams());

      // обновляем количество в инструменте
      if(isNew) this.tool.refreshAmount();

      // редиректим
      window.location.hash = "#moves/" + this.options.toolId;
    },
    sourceClick: function(ev){
      var label = $(ev.target);
      this.$("#source").val(label.text());
    }
  });
});