define(["base/collection", "model/move-model"], function(Collection, Move){
  return Collection.extend({
    name: "move",
    model: Move,
    init: function(){

    }
    /*getToolMoves: function(toolId){
      return _(this.where({toolId: toolId})).map(function(move){
        return _(move.attributes).extend({timePercent: move.getTimePercent()}).value();
      }).value();
    }*/
  });
});