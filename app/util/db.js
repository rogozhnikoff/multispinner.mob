function fixtures(tools, moves){
  var list = {
    tools: [
      {
        id: 1,
        name: "Пои",
        movesAmount: "5"
      },{
        id: 2,
        name: "Мячики",
        movesAmount: "8"
      },{
        id: 3,
        name: "Веера",
        movesAmount: "2"
      }
    ],
    moves: [
      {id: 1, name: "восьмерка", toolId: 1},
      {id: 2, name: "бабочка", toolId: 1},
      {id: 3, name: "каскад", toolId: 2}
    ]
  }


  _(list.tools).each(function(tool){
    tools.create(tool);
  });
  _(list.moves).each(function(move){
    moves.create(move);
  });
}

define(["collection/tool-collection", "collection/move-collection"], function (Tools, Moves) {
  return function () {
    _.extend(this, {
      tools: new Tools,
      moves: new Moves
    });

//    fixtures(this.tools, this.moves);

    return this;
  }
});