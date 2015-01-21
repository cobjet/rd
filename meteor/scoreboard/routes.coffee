Router.map ->
  @route 'home',
    path: '/'
    waitOn: ->
      Meteor.subscribe "users" 

  @route 'dashboard',
    path: '/dashboard'

