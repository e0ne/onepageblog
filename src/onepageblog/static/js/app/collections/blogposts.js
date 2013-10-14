define(['backbone', 'js/app/models/blogpost'],
function(Backbone, BlogPost){
    var BlogPosts = Backbone.Collection.extend({
        model: BlogPost,
        url: '/api/v1/posts/?format=json',

        parse: function(response){
            return response.objects;
        }
    });

    return BlogPosts;

});