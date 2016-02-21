define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/scenes/divyaroom.html',
    'views/scenes/RodeoCarnival',
    '../../libs/horizontalScroll/jquery.jInvertScroll.min'
], function($, _, Backbone, DivyaRoom, RodeoCarnival, hScroll){

    var divyaRoom = Backbone.View.extend({
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

            this.$el.html(DivyaRoom);
            var elem = $.jInvertScroll(['.scroll'],
              {
                height: 6000,
                onScroll: function(percent) {
                  console.log(percent);
                  var paints = $(".paints");
                  if(percent > 0.03 && percent < 0.2 ){
                    paints.addClass('paintsmoved');
                  }
                  for(i = 0 ; i< paints.length; i++){
                    var paint = $(paints[i]);
                    var left = parseInt(paint.css('left'));
                    paint.css('left',left-5);
                  }
                  if(percent == 1.0){
                    var rodeoCarnival = new RodeoCarnival();
                    rodeoCarnival.render();
                    return false;
                  }
                }
              });

        }
    });

    return divyaRoom;
});
