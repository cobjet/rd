Template.createPost.events({
    'click #savePost': function(event) {
        var title = document.getElementById('title').value;
        var summary = document.getElementById('summary').value;
        var content = document.getElementById('blogPost').value;
	var tag = 'code';

	if(document.getElementById('configuration').checked==true){
		tag = 'configuration';
	};

	if(document.getElementById('comments').checked==true){
		tag = 'comments';
	};

	if(document.getElementById('information').checked==true){
		tag = 'information';
	};
  if(document.getElementById('game').checked==true){
    tag = 'game';
  };

        var article = {
            title: title,
            summary: summary,
            content: content,
            postDate: new Date(),
            poster: 'Richard Ashkettle',
            tag:tag
        }

        article._id = Articles.insert(article);
        Router.go('/');
    }
})
