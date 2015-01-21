Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function(){
  this.redirect('/refill');
});

Router.route('/module1');

Router.route('/module2');

Router.route('/refill');