define(['backbone'],
function(Backbone){
    var BlogPost = Backbone.Model.extend({
        urlRoot: '/api/v1/post/?format=json',

        thumb: function(){
            return this.content.substring(0,200);
        }
    });

    return BlogPost;

});