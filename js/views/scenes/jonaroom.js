define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/scenes/jonaroom.html'
], function($, _, Backbone, JonaRoom){

    var jonaRoom = Backbone.View.extend({
        el: $("content"),

        render: function(){

            this.$el.html(JonaRoom);
            var elem = $.jInvertScroll(['.scroll'],
              {
                height: 6000,
                onScroll: function(percent) {
                  if(percent>0.03 & percent<0.1){
                    //$("#fallingobject").addClass('fall')
                    $("#fallingobject").css({'margin-left': '750px', 'margin-top': '300px'});
                  }else if(percent>0.1 & percent<0.2){
                    //$("#fallingobject").addClass('fallfurther')
                    $("#fallingobject").css({'margin-left': '600px', 'margin-top': '600px'});
                  }else if(percent < 0.03){
                    $("#fallingobject").css({'margin-left': '600px', 'margin-top': '0px'});
                  }

                }
              });

        }
    });

    return jonaRoom;
});
