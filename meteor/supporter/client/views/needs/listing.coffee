Template.needListing.rendered = ->
  $('a').tooltip
    placement: 'bottom'

  $('a').on('click', ->
    $(@).tooltip('destroy')
  )

Template.needListing.helpers
  isEditing: ->
    Session.get('editId') is @_id
  isReplying: ->
    Session.get('replyId') is @_id
  owner: ->
    Meteor.user()?.username is @username
  showStarred: ->
    Meteor.user()?.username isnt @username
  starred: ->
    Meteor.user() && Needs.findOne({_id: @_id}).starUsers and
      Needs.findOne({_id: @_id}).starUsers.length > 0 and
      Meteor.user()._id in Needs.findOne({_id: @_id}).starUsers

Template.needListing.events
  'click .delete': (event)->
    Needs.remove(@_id)

  'click .complete': (event)->
    Needs.update(@_id, $set: {completedAt: new Date()})

  "click .respond": (event, template)->
    Session.set('respondingTo', @_id)
    Session.set('charsOffer', null)
    Session.set('replyId', @_id)

  "click .send": (event, template)->
    Session.set('sendingTo', @_id)
    $(template.find('.sendNeed')).modal()

  "click .editNeedBtn": (event, template)->
    Session.set('respondingTo', @_id)
    Session.set('charsOffer', null)
    Session.set('editId', @_id)

  "click .star": (event, template)->
    id = @_id
    stars = Needs.find ({_id:@_id,  starUsers: { $in: [Meteor.user()._id] }}  )
    alreadyStar = stars and stars.count() > 0
    if alreadyStar
      #TODO remove this need to user's list
      Needs.update(@_id, {$pull: {starUsers: Meteor.user()._id}})
      Needs.update(@_id,  {$inc: {starCount: -1}})
    else
      #TODO Add this need to user's list
      Needs.update(@_id,  {$inc: {starCount: 1}})
      Needs.update(@_id, {$push: {starUsers: Meteor.user()._id}})

    Meteor.call("updateScore", id, true)
