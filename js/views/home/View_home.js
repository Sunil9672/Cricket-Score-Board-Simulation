define([
    'jquery',
    '../../libs/parallax/parallax',
    'underscore',
    'backbone',
    'skrollr',
    'text!templates/home/tmpl_home.html',
    'views/footer/View_footer',
    'views/navbar/View_navbar',
    '../../libs/horizontalScroll/jquery.jInvertScroll.min',


], function($, Parallax,_, Backbone, Skrollr, Tmpl_home, View_footer, View_navbar,hScroll){

    var View_home = Backbone.View.extend({
        el: $("content"),

        initialize: function() {

            //elements initialised
            this.window               = $(window);
            this.document             = $(document);
            this.body                 = $('body');
            this.links                = $('a[href*=#]');
            this.windowHeight         = this.window.height();
            this.verticalScrollDiv    = $("#");
            this.parallaxDiv          = $("#");
            this.bindFunctions();
            console.log("Parallax..init",hScroll)
        },

        bindFunctions : function(){
          $(window).on("resize", this.resizeAction);
          $(window).on("scroll", this.scrollAction);
          $(document).ready(this.readyAction);
        },

        resizeAction: function(ev){
            var base  = this;
            var windH = $(window).height();
            var bodyHeight  = windH *4
            $("body").height(bodyHeight);
            if(base.page == undefined){
              base.page = $("#page")
            }
            if(base.horizontalScroll == undefined){
              base.horizontalScroll = $("#horizontal");
            }
            var horizontalScroll    = base.horizontalScroll;
            var page                = base.page;
            horizontalScroll.height(bodyHeight/2)
            $("#page").height(bodyHeight/2);

          /*
            var elem = $(".scroll");
              if ($(window).width() <= 768) {
                elem.destroy();
              }
              else {
                elem.reinitialize();
              }
            */
        },

        scrollAction : function(ev) {
          console.log("Parallax..scroll",Parallax)
          var base = this;
          var scrollY           = base.window.scrollY;
          if(base.horizontalScroll == undefined){
            base.horizontalScroll = $("#horizontal");
          }
          var horizontalScroll    = base.horizontalScroll;
          var scrollDiv           = base.horizontalScrollDiv;
          if(scrollY > 1018 && scrollY < 3018){
            horizontalScroll.show();
          }else if(scrollY > 3018 || scrollY < 1018){
            horizontalScroll.hide();
          }
        },

        setHeight : function(){
          var windowHeight = $(window).height();
          var body         = $('body');
          body.height(windowHeight);
        },

        readyAction : function(){
          function filterPath(string) {
              return string
                  .replace(/^\//,'')
                  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
                  .replace(/\/$/,'');
          }
          console.log("Parallax..ready",Parallax)
          $("#container").height($(window).height());
          var locationPath = filterPath(location.pathname);
          var scrollElem = scrollableElement('html', 'body');
          $('a[href*=#]').each(function() {
              var thisPath = filterPath(this.pathname) || locationPath;
              if (  locationPath == thisPath
                  && (location.hostname == this.hostname || !this.hostname)
                  && this.hash.replace(/#/,'') ) {
                  var $target = $(this.hash), target = this.hash;
                  if (target) {
                      var targetOffset = $target.offset().top;
                      $(this).click(function(event) {
                          event.preventDefault();
                          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
                              location.hash = target;
                          });
                      });
                  }
              }
          });

          // use the first element that is "scrollable"
          function scrollableElement(els) {
              for (var i = 0, argLength = arguments.length; i <argLength; i++) {
                  var el = arguments[i],
                      $scrollElement = $(el);
                  if ($scrollElement.scrollTop()> 0) {
                      return el;
                  } else {
                      $scrollElement.scrollTop(1);
                      var isScrollable = $scrollElement.scrollTop()> 0;
                      $scrollElement.scrollTop(0);
                      if (isScrollable) {
                          return el;
                      }
                  }
              }
              return [];
          }
        },

        render: function(){

          //  var tView_navbar = new View_navbar();
          //  tView_navbar.render();

            var windH = $(window).height();
            var tempH = Math.ceil(( windH - 375)/2);
            var data=(windH>540)? {data:{"padX":"5","padY":tempH}}:{data:{"padX":"5","padY":"75"}};
            var tTmpl_home = _.template(Tmpl_home, data);
            this.$el.html(tTmpl_home);



            var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
              {
                height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
                onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                //  console.log(percent);
                }
              });
              var scene = $('#scene');
          //    var parallax = new Parallax(scene[0]);
        //    console.log("Parallax..render",Parallax)

          //  var tView_footer = new View_footer();
          //  tView_footer.render();
        }
    });

    return View_home;
});
