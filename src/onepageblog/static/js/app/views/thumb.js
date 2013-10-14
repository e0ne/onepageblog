define(['marionette', 'text!templates/thumb.html'],
function(Marionette, blogpostThumbTemplate){
    var BlogPostThumbView = Backbone.Marionette.ItemView.extend({
        template: function(model) {
            return _.template(blogpostThumbTemplate, {blogpost: model});
        },

        events: {
        }
    });

    return BlogPostThumbView;
});