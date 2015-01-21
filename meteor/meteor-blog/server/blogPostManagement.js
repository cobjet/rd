Articles.allow(
    {
        insert: function () {
            return ( (Meteor.user().services) &&
            (Meteor.user().services.google) &&
            (Meteor.user().services.google.id == '108886929942618533882' ) );
        },
        update: function () {
            return ( (Meteor.user().services) &&
            (Meteor.user().services.google) &&
            (Meteor.user().services.google.id == '108886929942618533882' ) );
        },

        remove: function () {
            return ( (Meteor.user().services) &&
            (Meteor.user().services.google) &&
            (Meteor.user().services.google.id == '108886929942618533882' ) );
        }
    }
);




