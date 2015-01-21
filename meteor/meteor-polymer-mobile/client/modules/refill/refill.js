
Template.refill.helpers({
  refill: function() {
    return Refill.find();
  }
});

Template.refill.rendered = function() {
  IN.layout.setMainTitle('Refill');
}

Template.refill.events({
  'click [data-del]': function() {
    Refill.remove({
      _id: this._id
    });
  },
  'click [label="Refill"]': function() {
    // refill data
    var itm = Refill.find().count();
    if (itm < 10) {
      for (var i = 0; i < (10-itm); i++) {
        Refill.insert({
          name: 'item ' + Random.id(),
          rank: i
        });
      }
    }
    Blaze.render(Template.refillpopup, document.body);
  }
});

Template.refillpopup.helpers({
  refill: function() {
    return Refill.find();
  }
});

Template.refillpopup.rendered = function() {
  document.getElementById('refillpopup').toggle();
}

Template.refillpopup.events({ 
  'core-overlay-close-completed':function(e) {
    // the object is deleted once closed
    e.currentTarget.remove();
  }
});

