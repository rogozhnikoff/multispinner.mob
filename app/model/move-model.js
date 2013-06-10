define(["base/model"], function (Model) {
  return Model.extend({
    defaults: {
      name: "",
      description: "",
      toolId: null,
      type: null, // "move" || "pack"
      know: null, // true || false
      time: 0, // требуемое время
      timeTracked: 0, // оттреканное время
      source: null
    },
    initialize: function () {

    },
    getTimePercent: function () {
      if(parseInt(this.get("time")) === 0) return 0;

      var percent = (this.get("timeTracked") / this.get("time") * 100).toFixed(0);
      return (percent < 100) ? percent : 100;
    },
    getTimeDiff: function () {
      return (this.get("time") - this.get("timeTracked")).toFixed(0);
    }

    // TODO: реализуй нормальное форматирование времени: 1 час 30 минут, а не 90 минут
  });
});