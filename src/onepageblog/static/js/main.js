requirejs.config({
    baseUrl: 'static',
//    urlArgs: '_=' +  (new Date()).getTime(),
    waitSeconds: 60,
    paths: {
        jquery: 'js/libs/jquery-2.0.3',
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
        app: {
            deps: ['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap']
        },
        controller: {
            deps: ['app']
        }
    }
});

require(['backbone', 'marionette', 'handlebars', 'TrafficCop', 'app'],
function (Backbone, Marionette, Handlebars, TrafficCop, App){
    'use strict';

    App.start();
});
