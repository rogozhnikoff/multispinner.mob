define(["screen/index-screen", "screen/moves-screen", "screen/tool-screen", "screen/move-screen"], function (Index, Moves, Tool, Move) {
  return Backbone.Router.extend({
    initialize: function () {
      Backbone.history.start();
    },
    routes: {
      "": "start",
      "!/": "start",
      "moves/:id": "moves",
      "tool/:id": "toolEdit",
      "move/:toolId/:id": "moveEdit"
    },
    refresh: function () {
      var _tmp = Backbone.history.fragment;
      this.navigate(_tmp + (new Date).getTime());
      this.navigate(_tmp, { trigger: true });
    },
    start: function () {
      this.main();
    },
    main: function () {
      // чистим несохраненные
      db.tools.each(function (tool) {
        if (tool.isNew()) tool.destroy();
      });

      var screen = new Index({
        tools: db.tools
      });

      app.changeScreen({
        screen: screen
      });
    },
    moves: function (toolId) {
      // чистим несохраненные
      db.moves.each(function (move) {
        if (move.isNew()) move.destroy();
      });

      var moves = db.moves.where({toolId: toolId});

      var screen = new Moves({
        moves: moves,
        toolId: toolId
      });

      app.changeScreen({
        screen: screen
      });
    },
    toolEdit: function (toolId) {
      var tool = (toolId === "new")
        // для нового, создаем временную модель
        ? db.tools.push({})
        : db.tools.get(toolId);

      var screen = new Tool({
        tool: tool
      });

      app.changeScreen({
        screen: screen
      });
    },
    moveEdit: function (toolId, moveId) {
      var move = (moveId === "new")
        // для нового, создаем временную модель
        ? db.moves.push({toolId: toolId})
        : db.moves.get(moveId);

      var screen = new Move({
        move: move,
        toolId: toolId
      });

      app.changeScreen({
        screen: screen
      });
    }
  });
});