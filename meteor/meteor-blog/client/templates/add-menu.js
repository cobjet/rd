Template.addMenu.rendered = function() {
  var createButton = document.querySelector('#create');
  var drawer = document.querySelector('.menuDrawer');


  createButton.addEventListener('click', function(){
    drawer.togglePanel();
  });



}
