

Template.toolbar.rendered = function() {
  var titleStyle = document.querySelector('.title').style;
  var drawer = document.querySelector('.menuDrawer');
  var menuButton = document.querySelector('.menuButton');

  addEventListener('core-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
    titleStyle.transform = titleStyle.webkitTransform =
    'scale(' + scale + ') translateZ(0)';
  });




  menuButton.addEventListener('click', function(e) {
    drawer.togglePanel();
  })

}
