
Template.notifications.helpers({
  notifications: function() {
    return Notifications.find();
  },
  countNotifications: function() {
    return Notifications.find().count();
  }
});

Template.notifications.events({
  'click [id="notificationsbtn"]': function() {
    document.getElementById('notificationsmenu').toggle();
  },
  'click [data-del]': function() {
    Notifications.remove({_id: this._id});
  }
});



