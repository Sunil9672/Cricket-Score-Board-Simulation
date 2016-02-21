define([
    'jquery',
    'underscore',
    '../../libs/parallax/parallax',
    'backbone',
    'skrollr',
    'text!templates/scenes/intro.html',
    'views/scenes/DivyaRoom',
    'views/scenes/JonaRoom',

], function($, _,Parallax, Backbone, Skrollr, IntroTemplate,DivyaRoom,JonaRoom){

    var Intro = Backbone.View.extend({
        $el: $("content"),

        initialize: function() {
          $(document).ready(function() {
            var doors = $("#doors");

            init();
            bindFunctions();

            function init (){
              var windH = $(window).height();
              var windW = $(window).width();

              var content = $("content");
              var introDiv = $("#intro");
              var doors    = $("#doors");

              content.height(windH);
              content.width(windW);

              introDiv.height(windH);
              introDiv.width(windW);

              doors.height(windH/2);
              doors.width(windW/2);

            }
            function bindFunctions (){
              var base = this;
              doors.bind('click', doorClick,event);
            }
            function doorClick(event,data){
              console.log("doorclick..",event);
              var span = (event && event.target) ? event.target.closest('span') : undefined;
              if(span != undefined){
                var doorId = $(span).attr('id');
                console.log("span id",doorId);
                if(doorId == "jonadoor"){
                  var jonaRoom = new JonaRoom();
                  jonaRoom.render();
                }else if(doorId == "divyadoor"){
                  var divyaRoom = new DivyaRoom();
                  divyaRoom.render();
                }
              }
            }
          });
        },


        render: function(){
            var windH = $(window).height();
            var tempH = Math.ceil(( windH - 375)/2);
            var data=(windH>540)? {data:{"padX":"5","padY":tempH}}:{data:{"padX":"5","padY":"75"}};

            var introTemplate = _.template(IntroTemplate, data);
            //this.$el.html(introTemplate);
            $("content").html(introTemplate);
            //console.log("parallax..",Parallax)
            //var scene = $("#scene");
            //var parallax = new Parallax(scene[0]);
        }
    });

    return Intro;
});
