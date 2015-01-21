Template.home.rendered = ->

  #SEO Page Title & Description
  document.title = "Scoreboard"
  $("<meta>", { name: "description", content: "How we do work" }).appendTo "head"

Template.home.helpers
  users: ->
    User.all()
