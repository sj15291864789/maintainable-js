/**
 * Created by jshen on 8/25/15.
 */
var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var template = require("../templates/like-place-view.hbs");

module.exports =  Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:likePlaces', _.bind(this.render, this));
        this.template = $('#like-place-form').html();
    },
    events: {
        'add #like-place-list': 'addLikePlace'
    },
    addLikePlace: function(e, likePlace) {
        e.preventDefault();
        this.model.get('likePlaces').push({"id": 3, "name": likePlace, "description": ""});
        this.model.trigger('change:likePlaces');
    },

    el: '#likedPlaces',
    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});