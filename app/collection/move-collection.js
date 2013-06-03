define(["base/collection", "model/move-model"], function(Collection, Move){
  return Collection.extend({
    name: "move",
    model: Move,
    init: function(){

    }
  });
});