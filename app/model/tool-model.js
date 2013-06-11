define(["base/model"], function (Model) {
  return Model.extend({
    defaults: {
      name: "",
      movesAmount: 0
    },
    initialize: function () {

    },
    refreshAmount: function () {
      this.save({movesAmount: db.moves.where({toolId: this.id}).length});
    }
  });
});