Router.configure({
    layoutTemplate: 'toolbar'
});

Router.route('/', {
    name: 'content-list'
});
Router.route('/about', {
    name: 'about'
});
Router.route('/create', {
  name: 'createPost'
});
Router.route('/article/:_id', function () {
  this.render('articleDetails', {
    data: function () {
      return Articles.findOne({_id: this.params._id});
    }
  });
});
