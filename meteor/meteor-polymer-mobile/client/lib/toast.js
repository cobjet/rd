
Initial.prototype.toast = {
  view: function( color, text) {
    // to avoid creation of multiple toasts
    if( document.getElementById('toast') )
      document.getElementById('toast').remove();
    Blaze.renderWithData(Template.toast, {color:color,text:text}, document.body);
  }
}

Template.toast.rendered = function() {
  document.getElementById('toast').show();
}

Template.toast.events({ 
  'core-overlay-close-completed':function(e) {
    // the object is deleted once closed
    e.currentTarget.remove();
  }
});