define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/navbar/Tmpl_navbar.html'
], function($, _, Backbone, Tmpl_navbar){

    var View_footer = Backbone.View.extend({
        el: $("header"),

        render: function(){

            this.$el.html(Tmpl_navbar);
            this.$el.show();

        }
    });

    return View_footer;
});