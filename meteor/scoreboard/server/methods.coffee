Meteor.startup ->
  Meteor.methods
    getWorkspace: (user) ->
      apiToken = "55ebc6105d048594e2c626b0eff830ef:api_token"
      encAPI = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(apiToken))

      url = 'https://toggl.com/api/v8/workspaces'

      result = HTTP.call("GET", url,
        headers:
          "Authorization": "Basic "+encAPI
      )    

      console.log result

    getProjectData: (startdate) ->
      apiToken = "55ebc6105d048594e2c626b0eff830ef:api_token"
      encAPI = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(apiToken))
      console.log "Start getTogglData API"

      url = 'https://toggl.com/reports/api/v2/weekly'

      result = HTTP.call("GET", url,
        headers:
          "Authorization": "Basic "+encAPI
        params:
          "user_agent": "colin@differential.io",
          "workspace_id": "398707",
          "rounding": "on",
          "billable": "yes",
          "since": startdate,
          "calculate": "time"
          "grouping": "projects"
      )

      weeklyProjects = result.data.data

      _.each weeklyProjects, (project) ->
        console.log project

  #Meteor.call('getProjectData', "2014-03-08")