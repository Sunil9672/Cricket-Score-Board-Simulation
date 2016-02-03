// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'skrollr',
    'views/home/View_home'
], function($, _, Backbone, Skrollr , View_home) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'showIndex',
            'register': 'showRegister',
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:showIndex', function (actions) {

            var tView_home = new View_home();
            tView_home.render();

        });

        app_router.on('route:defaultAction', function (actions) {

            var tView_home = new View_home();
            tView_home.render();

        });

        Backbone.history.start();

    };
    return {
        initialize: initialize
    };
});
