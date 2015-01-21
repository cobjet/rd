Template.about.rendered = function() {
  document.getElementById('about').toggle();
}

Template.about.events({ 
  'core-overlay-close-completed':function(e) {
    // the object is deleted once closed
    e.currentTarget.remove();
  }
});