
Template.module1.helpers({
  module1: function() {
    return Module1.find();
  }
});

Template.module1.rendered = function(argument) {
  IN.layout.setMainTitle('Module1');
}

Template.module1.events({
  'click [data-del]': function() {
    Module1.remove({
      _id: this._id
    });
  }
});




