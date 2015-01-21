Template.hello.events({
  'click #navicon': function(){
    var drawerPanel = document.getElementById('drawerPanel');
    drawerPanel.togglePanel();
  }
});