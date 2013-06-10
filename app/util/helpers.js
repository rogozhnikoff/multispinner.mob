define(["underscore", "handlebars", "jquery"], function (_, Handlebars) {
  Handlebars.registerHelper('tagList', function (items, options) {
    var out = "";

    _(items).each(function (item, i) {
      out += "<span class='label label-info'>" + item + "</span>";
      if (i + 1 !== items.length) out += ", ";
    });

    return out;
  });
});