function fixtures(tools, moves){
  var list = {
    tools: [
      {
        id: "1",
        name: "Пои",
        movesAmount: "5"
      },{
        id: "2",
        name: "Мячики",
        movesAmount: "8"
      },{
        id: "3",
        name: "Веера",
        movesAmount: "2"
      }
    ],
    moves: [
      {id: "1", name: "восьмерка", toolId: "1", time: 45, timeTracked: 15},
      {id: "2", name: "бабочка", toolId: "1", time: 20, timeTracked: 8},
      {id: "3", name: "каскад", toolId: "2"}
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
  return _.once(function () {
    _.extend(this, {
      tools: new Tools,
      moves: new Moves,
      times: [0, 5, 10, 15, 20, 30, 45, 60, 90, 120, 150, 180, 240, 300, 360]
    });

//    fixtures(this.tools, this.moves);

    return this;
  });
});