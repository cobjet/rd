
Template.sidebar.events({
  'click [id="navicon2"]': function() {
    var isNarrow = document.getElementById('drawerPanel').getAttribute('forceNarrow');
    var icon = 'drawer';
    if( isNarrow == 'false') {
      isNarrow = 'true';
    }
    else {
      isNarrow = 'false';
      icon = 'check-box-outline-blank';
    }
    document.getElementById('drawerPanel').setAttribute('forceNarrow',isNarrow);
    document.getElementById('navicon2').setAttribute('icon',icon);
  },  
  'click [label="Module1"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/module1');
  },  
  'click [label="Module2"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/module2');
  },
  'click [label="Refill"]': function() {
    IN.layout.toggleDrawerPanel();
    Router.go('/refill');
  },
  'click [label="About"]': function() {
    IN.layout.toggleDrawerPanel();
    Blaze.render(Template.about, document.body);
  }
});

