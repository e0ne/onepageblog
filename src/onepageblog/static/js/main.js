requirejs.config({
    baseUrl: 'static',
    urlArgs: '_=' +  (new Date()).getTime(),
    waitSeconds: 60,
    paths: {
        jquery: 'js/libs/jquery-2.0.3',
        'jquery-player': 'js/libs/jquery.jplayer',
        'jquery-cookie': 'js/libs/jquery.cookie',
        utils: 'js/utils',
        underscore: 'js/libs/lodash',
        backbone: 'js/libs/backbone',
        'backbone.wreqr': 'js/libs/backbone.wreqr',
        'backbone.babysitter': 'js/libs/backbone.babysitter',
        marionette: 'js/libs/backbone.marionette',
        handlebars:'js/libs/handlebars',
        TrafficCop: 'js/libs/TrafficCop',
        bootstrap: 'js/libs/bootstrap',
        text: 'js/libs/text',
        app: 'js/app/application'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette:{
            deps: ['backbone', 'underscore']
        },
        bootstrap: {
            deps: ['jquery']
        },
        'jquery-player': {
            deps: ['jquery']
        },
        app: {
            deps: ['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap', 'jquery-cookie']
        },
        controller: {
            deps: ['app']
        }
    }
});

require(['backbone', 'marionette', 'handlebars', 'TrafficCop', 'jquery-player', 'app'],
function (Backbone, Marionette, Handlebars, TrafficCop, JqueryPlayer, App){
    'use strict';

    App.start();
});
