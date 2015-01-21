Meteor.publish "users", ->
  User.find()