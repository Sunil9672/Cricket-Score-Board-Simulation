// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'skrollr',
  'parallax'

//  'horizontalScroll'

], function($, _, Backbone, Router, Skrollr, Parallax ){
  var initialize = function(){
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});
