// Set up login services
Meteor.startup(function() {
    // Remove configuration entries in case service is already configured
    ServiceConfiguration.configurations.remove({$or: [
        {service: "facebook"},
        {service: "twitter"},
        {service: "google"}
    ]});

    
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "facebook",
        "appId": "596524130470648",
        "secret": "0f358d095c3b877563267e3f617f3132"
    });

    // Add twitter configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "twitter",
        "consumerKey": "TmpyfwKIHtudFXkouNgNTYEQp",
        "secret": "uGnubUSzLNLlxMvZeXp66gws6hQWB6HgjRo7cS84DNn1CI8gGH"
    });
    

    // Add Google configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "1012338572580-icek01din84s3k5vuubkdu48j4oq69n6.apps.googleusercontent.com",
        "client_email": "1012338572580-icek01din84s3k5vuubkdu48j4oq69n6@developer.gserviceaccount.com",
        "secret": "UneJAFs-hREjmYWMUCs_ii4B"
    });

    // Add GitHub configuration entry
    // ServiceConfiguration.configurations.insert({
    //     "service": "github",
    //     "clientId": "XXXXXXXXXXXXXXXXXXXX",
    //     "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    // });

    /*
    // Add Linkedin configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "linkedin",
        "clientId": "XXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXX"
    });
    */
});