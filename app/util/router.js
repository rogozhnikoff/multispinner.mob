define(["screen/index-screen", "screen/moves-screen", "screen/tool-screen"], function (Index, Moves, Tool) {
  return Backbone.Router.extend({
    initialize: function () {
      Backbone.history.start();
    },
    routes: {
      "": "start",
      "!/": "start",
      "moves/:id": "moves",
      "tool/:id": "toolEdit"
    },
    start: function () {
      this.main();
    },
    main: function () {
      // чистим несохраненные
      db.tools.each(function(tool){
        if(tool.isNew()) tool.destroy();
      });

      var screen = new Index({
        tools: db.tools
      });

      app.changeScreen({
        screen: screen
      });
    },
    moves: function(toolId){
      toolId += ""; // приводим к строке
      var moves = db.moves.where({toolId: toolId});

      var screen = new Moves({
        moves: moves
      });

      app.changeScreen({
        screen: screen
      });
    },
    toolEdit: function(toolId){
      toolId += ""; // приводим к строке

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
    }
  });
});