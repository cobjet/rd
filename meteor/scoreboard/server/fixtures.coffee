Meteor.startup ->
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox22243.mailgun.org:05itf2icbj91@smtp.mailgun.org:587'

  if Meteor.users.find().fetch().length is 0
    console.log "Creating users: "
    users = [
      name: "Colin"
      email: "colin@differential.io"
      initials: "CF"
    ,
      name: "Greg"
      email: "greg@differential.io"
      initials: "GN"
    ,
      name: "Ry"
      email: "ry@differential.io"
      initials: "RW"
    ,
      name: "Gerard"
      email: "gerard@differential.io"
      initials: "GS"
    ,
      name: "David"
      email: "david@differential.io"
      initials: "DP"
    ,
      name: "Josh"
      email: "josh@differential.io"
      initials: "JO"
    ,
      name: "Tim"
      email: "tim@differential.io"
      initials: "TM"
    ,
      name: "Brad"
      email: "brad@differential.io"
      initials: "BK"
    ,
    ]
    _.each users, (userData) ->
      console.log userData
      id = Accounts.createUser(
        email: userData.email
        password: "differential"
        profile:
          firstName: userData.name
          initials: userData.initials
      )
