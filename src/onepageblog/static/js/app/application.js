define(
[
    'backbone',
    'js/app/views/archive',
    'js/app/views/blogpost',
    'js/app/views/contacts'
],
function(Backbone, ArchiveView, BlogpostView, ContactsView) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    App.addRegions({
        mainRegion: '#content'
    });

    var AppController = Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            // TODO: init header, footer
        },
        index: function(){
            App.mainRegion.show(new ArchiveView());
        },
        post: function(id){
            App.mainRegion.show(new BlogpostView({id: id}));
        },
        contacts: function(){
            App.mainRegion.show(new ContactsView());
        }
    });

    var AppRouter = Backbone.Marionette.AppRouter.extend({
       appRoutes: {
           "": 'index',
           "posts/:id": "post",
           "contacts": "contacts"
       }
   });

    App.appRouter = new AppRouter({
        controller:new AppController()
    });

    App.addInitializer(function(options) {

    });

    App.on("initialize:after",function(){
        if(Backbone.history){
            Backbone.history.start();
        }
    });

    return App;

});