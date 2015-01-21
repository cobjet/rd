Meteor.users.deny({update: function () { return true; }});
Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
      {fields: {'email': 1, 'profile': 1,'services': 1}});
    } else {
      this.ready();
    }
  });
