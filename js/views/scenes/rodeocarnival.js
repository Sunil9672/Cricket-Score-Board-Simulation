define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/scenes/rodeocarnival.html',
    '../../libs/horizontalScroll/jquery.jInvertScroll.min'
], function($, _, Backbone, RodeoCarnival,hScroll){

    var rodeoCarival = Backbone.View.extend({
        el: $("content"),
        initialize: function() {
          $(document).ready(function() {
            $("#paint").css({"width": "100px", "height": "70px"});

            init();
            bindFunctions();

            function init (){

            }
            function bindFunctions (){

            }
          });
        },
        render: function(){

            this.$el.html(RodeoCarnival);
          /*  var elem = $.jInvertScroll(['.scroll'],
              {
                height: 6000,
                onScroll: function(percent) {

                }
              });
*/
        }
    });

    return rodeoCarival;
});
