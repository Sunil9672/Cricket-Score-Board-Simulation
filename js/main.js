require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    parallax: 'libs/parallax/parallax.min',
    bootstrap: 'libs/bootstrap/bootstrap-min',
    skrollr: 'libs/Skrollr/skrollr.min',
    templates: '../templates',

  }
});

require([

  'app',
  'skrollr'

], function(App, skrollr){

  App.initialize();
  var s = skrollr.init({
		    edgeStrategy: 'set',
		    easing: {
			       WTF: Math.random,
			      inverted: function(p) {
				          return 1-p;
			      }
		    }
	  });
    //var h = horizontalScroll.init();
});
