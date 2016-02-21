// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'skrollr',
    'parallax',

    'views/scenes/intro',
    'views/home/View_home'
], function($, _, Backbone, Skrollr ,Parallax, Intro, View_home) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'index': 'showIndex',
            'register': 'showRegister',
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

        app_router.on('route:defaultAction', function (actions) {
              var intro = new Intro();
              intro.render();
            //  var scene = $("#scene");
            //  var parallax = new Parallax(scene[0]);              
        });

        app_router.on('route:showIndex', function (actions) {
            var tView_home = new View_home();
            tView_home.render();

        });

    /*    app_router.on('route:defaultAction', function (actions) {

            var tView_home = new View_home();
            tView_home.render();
            var scene = $("#scene")
            var parallax = new Parallax(scene[0]);

        });
*/
        Backbone.history.start();

    };
    return {
        initialize: initialize
    };
});
