define(['marionette',  'text!templates/archive.html',  'js/app/views/thumb', 'js/app/collections/blogposts'],
function(Marionette, archiveTemplate, BlogPostThumb, BlogPosts){
    var ArchiveView = Backbone.Marionette.CompositeView.extend({
        id: 'archive',
        className: 'row marketing',
        template: _.template(archiveTemplate),
        itemView: BlogPostThumb,
        itemViewContainer: 'div',
        collection: new BlogPosts(),

        events: {
        },

        initialize: function() {
            this.collection.fetch();
        },

        appendHtml: function(collectionView, itemView){
           collectionView.$("#content").append(itemView.el);
        }


    });

    return ArchiveView;
});