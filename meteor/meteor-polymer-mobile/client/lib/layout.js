
Initial.prototype.layout = {
  setMainTitle: function( title) {
    document.getElementById('contenttitle').innerHTML = title;
  },
  toggleDrawerPanel: function() {
    document.getElementById('drawerPanel').togglePanel();
  }
}


Initial.prototype.polymer = {
  dropdownHeightBug: function( id) {
    // this line below is to correct a bug in Polymer:paper-dropdown when the number of items in a menu is updated
    document.getElementById(id).$.scroller.style.height = '';
  }
}



