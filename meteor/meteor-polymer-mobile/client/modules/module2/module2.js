
Template.module2.rendered = function(argument) {
  IN.layout.setMainTitle('Module2');
}

Template.module2.helpers({
  module2: function() {
    return Module2.find();
  }
});

Template.module2.events({
  'click [data-del]': function() {
    Module2.remove({
      _id: this._id
    });
  }
});
