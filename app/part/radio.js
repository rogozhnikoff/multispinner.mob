define(["base/part", "bootstrap/bootstrap-button"], function(Part){
  return Part.extend({
    initialize: function(){
      this.$(".btn-group").button(this.callback("click"));
      this.btn = this.$(".btn");
      this.input = this.$("input[type=hidden]");
      
      this.click({});
    },
    click: function(opt){
      var el = opt.el || this.btn.filter(".active");
      this.input.val(el.data("value"));
    }
  });
});