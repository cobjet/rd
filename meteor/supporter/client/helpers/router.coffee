Router.configure
  layoutTemplate: "layout"
  notFoundTemplate: "notFound"
  loadingTemplate: "loading"
  yieldTemplates:
    footer:
      to: "footer"

Router.onBeforeAction 'loading'

Router.map ->
  @route 'needs',
    path: '/'
    data: ->
      needs: Needs.find({}, {sort: {score: -1}})
      backgrounds: Backgrounds.find()
    waitOn: ->
      if Meteor.settings["public"].visibility isnt "private"
        Meteor.subscribe "needs", Session.get("query")
        Meteor.subscribe "offers"
        Meteor.subscribe "backgrounds"
      else
        if Meteor.user()
          if Roles.userIsInRole(Meteor.user()._id, ['admin'])
            Meteor.subscribe "needs", Session.get("query")
            Meteor.subscribe "offers"
            Meteor.subscribe "backgrounds"
          else
            Meteor.subscribe('userNeeds')

    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'needs'

  @route 'myNeeds',
    path: '/mine'
    template: 'needs'
    data: ->
      needs: Needs.find()
      backgrounds: Backgrounds.find()
    waitOn: ->
      Meteor.subscribe('userNeeds')
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'needs'
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'need',
    path: '/need/:id'
    data: ->
      needs: Needs.findOne @params.id
      offers: Offers.find
    waitOn: ->
      Meteor.subscribe('need', @params.id)
      Meteor.subscribe('offersForNeed', @params.id)
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      Session.set('sendingTo', null)
      Session.set('respondingTo', null)
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'backgrounds',
    path: '/backgrounds'
    data: ->
      backgrounds: Backgrounds.find({})
      needs: Needs.find({}, {sort: {score: -1}})
    waitOn: ->
      Meteor.subscribe('needs')
      Meteor.subscribe('allBackgrounds')
      Meteor.subscribe('offers')
    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'backgrounds'
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'manageBackgrounds',
    path: '/manageBackgrounds'
    data: ->
      backgrounds: Backgrounds.find({}, {sort: {score: -1}})
      needs: Needs.find({})
    waitOn: ->
      Meteor.subscribe('needs')
      Meteor.subscribe('backgrounds')
      Meteor.subscribe('offers')
    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'manageBackgrounds'
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'background',
    path: '/background/:id'
    data: ->
      backgrounds: Backgrounds.findOne @params.id
      needs: Needs.find({backgroundId: @params.id})
    waitOn: ->
      Meteor.subscribe('needs')
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      Session.set('sendingTo', null)
      Session.set('respondingTo', null)
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'user',
    path: '/u/:username'
    data: ->
      user: Meteor.users.findOne(username: @params.username)
      needs: Needs.find(username: @params.username)
    waitOn: ->
      Meteor.subscribe('user', @params.username)
      Meteor.subscribe('userNeeds', @params.username)
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
      Meteor.subscribe('needs')
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'profile',
    path: '/profile'
    data: ->
      Meteor.user()
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'manage',
    path: '/manage'
    data: ->
      user: Meteor.users.findOne(username: @params.username)
      needs: Needs.find({})
    waitOn: ->
      Meteor.subscribe('user', @params.username)
      Meteor.subscribe('userNeeds', @params.username)
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
      Meteor.subscribe('needs')
    onAfterAction: ->
      Session.set('emailSent', null)

  @route 'admin',
    path: '/admin'
    waitOn: ->
      Meteor.subscribe 'admins'
    onBeforeAction: ->
      if Meteor.user()
        unless Roles.userIsInRole(Meteor.user()._id, ['admin'])
          Router.go 'profile'

  @route 'strNeeds',
    path: '/fav'
    template: 'needs'
    data: ->
      needs: Needs.find ({starUsers: { $in: [Meteor.user()._id] }}  )
    waitOn: ->
      Meteor.subscribe 'needs', Session.get('strNeeds')
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'needs'
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'topNeeds',
    path: '/top'
    template: 'needs'
    data: ->
       needs: Needs.find({}, {sort: {score: -1}})
    waitOn: ->
      Meteor.subscribe 'needs', Session.get('query')
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'needs'
    onAfterAction: ->
      $('#query').val('')
      Session.set 'query', null

  @route 'newNeed',
    path: '/new'
    template: 'newNeed'
    data: ->
      backgrounds: Backgrounds.find()
    waitOn: ->
      Meteor.subscribe('backgrounds')

  @route 'about',
    path: '/about'

  @route 'tag',
    path: '/:query'
    template: 'needs'
    data: ->
      needs: Needs.find({}, {sort: {score: -1}})
      backgrounds: Backgrounds.find()
      offers: Offers.find()
    waitOn: ->
      Meteor.subscribe 'needs', @params.query
      Meteor.subscribe('offers')
      Meteor.subscribe('backgrounds')
    onBeforeAction: ->
      Session.set 'query', @params.query
      if (Meteor.loggingIn())
        @render 'loading'
      if (Meteor.user() && !Meteor.user().username)
        return @redirect('profile')
      else
        @render 'needs'
