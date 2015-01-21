Template.myImage.rendered = function() {
  var myPic = document.querySelector('.myPic').style;
  addEventListener('core-header-transform', function(e) {
    var d = e.detail;
    var m = d.height - d.condensedHeight;
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
    myPic.transform = myPic.webkitTransform = 'scale(' + scale + ') translateZ(0)';
  });
}
