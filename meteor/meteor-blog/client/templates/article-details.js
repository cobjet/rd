Template.articleDetails.helpers({
  userIsAshkettle: function(){
    var user = Meteor.user();
    return ( (user) && (Meteor.user().services) && (Meteor.user().services.google) && (Meteor.user().services.google.id == '108886929942618533882' ) );
  },
  timestamp: function() {
    var hours = this.postDate.getHours();
    var minutes = this.postDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return this.postDate.getMonth()+1 + "/" + this.postDate.getDate() + "/" + this.postDate.getFullYear() + "  " + strTime;
  }

  });

  Template.articleDetails.events({
    'click #deleteButton': function(event) {
      Articles.remove(this._id);
      Router.go('/');
    }
  });
