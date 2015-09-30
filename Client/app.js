/**
 * Created by Jack on 9/29/2015.
 */
Template.body.helpers({

  polls: function () {
    return Polls.find();
  }


});

UI.registerHelper('indexedArray', function (context, options) {
  if (context) {
    return context.map(function (item, index) {
      item._index = index;
      return item;
    });
  }
});