define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/footer/Tmpl_footer.html'
], function($, _, Backbone, Tmpl_footer){

    var View_footer = Backbone.View.extend({
        el: $("footer"),

        render: function(){

            this.$el.html(Tmpl_footer);

        }
    });

    return View_footer;
});