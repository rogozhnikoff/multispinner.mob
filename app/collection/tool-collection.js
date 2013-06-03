define(["base/collection", "model/tool-model"], function(Collection, Tool){
  return Collection.extend({
    name: "tool",
    model: Tool,
    init: function(){

    }
  });
});