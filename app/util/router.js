define(["screen/index-screen", "screen/moves-screen"], function (Index, Moves) {
  return Backbone.Router.extend({
    initialize: function () {
      Backbone.history.start();
    },
    routes: {
      "": "start",
      "!/": "start",
      "moves/:id": "moves"
    },
    start: function () {
      this.main();
    },
    main: function () {
      var screen = new Index({
        tools: db.tools
      });

      app.changeScreen({
        screen: screen
      });
    },
    moves: function(toolId){
      toolId = parseInt(toolId);
      var moves = db.moves.where({toolId: toolId});

      var screen = new Moves({
        moves: moves
      });

      app.changeScreen({
        screen: screen
      });
    }
  });
});