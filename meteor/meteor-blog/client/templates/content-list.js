Template.contentList.helpers({
    articles: function() {
        return Articles.find({}, {sort: {postDate:-1}})
    }
});
