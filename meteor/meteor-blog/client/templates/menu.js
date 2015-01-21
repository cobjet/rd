Template.menu.rendered = function() {
  var aboutButton = document.querySelector('#about');
  var closeButton = document.querySelector('.closeButton');
  var homeButton = document.querySelector('#home');
  var drawer = document.querySelector('.menuDrawer');


  aboutButton.addEventListener('click', function(){
    drawer.togglePanel();
  });
  homeButton.addEventListener('click', function(){
    drawer.togglePanel();
  });

  closeButton.addEventListener('click', function(){
    drawer.togglePanel();
  });




}
Template.menu.helpers({
  userIsAshkettle: function(){
    var user = Meteor.user();
    return ( (user) && (Meteor.user().services) && (Meteor.user().services.google) && (Meteor.user().services.google.id == '108886929942618533882' ) );
  }});
