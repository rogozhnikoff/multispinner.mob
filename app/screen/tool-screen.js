define(["base/screen", "text!template/tool-screen.hbs", "jqpp/dom/form_params"], function (Screen, template) {

  return Screen.extend({
    tpl: template,
    className: "screen screen_tool",
    events: {
      "submit": "submit"
    },
    initialize: function () {
      this.render({
        tool: this.options.tool.attributes,
        isNew: this.options.tool.isNew()
      });
    },
    submit: function (ev) {
      ev.preventDefault();

      // сохраняем в модель
      this.options.tool.save(this.$("form").formParams());

      // редиректим
      window.location.hash = "";
    }
  });
});