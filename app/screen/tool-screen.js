define(["base/view", "text!template/tool-screen.hbs"], function (View, template) {
  return View.extend({
    tpl: template,
    events: {
      "submit": "submit"
    },
    initialize: function () {
      this.render({
        tool: this.options.tool.attributes,
        isNew: this.options.tool.isNew()
      });

      this.btn = this.$("button[type=submit]");
      this.inputs = this.$(":input:not(button, input[type=submit])");
    },
    submit: function(ev){
      ev.preventDefault();

      var tool = this.options.tool, data = {};

      this.inputs.each(function(){
        var input = $(this);
        data[input.attr("name")] = input.val();
      });

      tool.save(data);
      window.location.hash = "";
    }
  });
});