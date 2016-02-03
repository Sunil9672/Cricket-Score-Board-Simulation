// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'skrollr',
//  'horizontalScroll'

], function($, _, Backbone, Router, Skrollr ){
  var initialize = function(){
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});
