define(['marionette', 'text!templates/blogpost.html', 'js/app/models/blogpost'],
function(Marionette, blogpostTemplate, BlogPost){
    var BlogpostView = Backbone.Marionette.ItemView.extend({
        tagName: 'div',
        model: new BlogPost(),
        template: function(model) {
            return _.template(blogpostTemplate, {blogpost: model});
        },

        events: {
        },

        initialize: function(options){
            this.model.fetch({url: '/api/v1/posts/' + options.id + '?format=json'});
            this.model.on('sync', this.render);
        }
    });

    return BlogpostView;
});