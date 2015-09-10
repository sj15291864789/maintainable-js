var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var template = require("../templates/search-result-view.hbs");

module.exports =  Backbone.View.extend({
    initialize: function(model) {
        this.model = model;
        this.model.bind('change:searchResults', _.bind(this.render, this));
        this.template = $('#search-result-form').html();
    },
    events: {
        'display #results': 'displayResults',
        'click #results .like': 'addLikePlace'
    },
    displayResults: function(e, res) {
        this.model.set('searchResults', res.data);
        this.model.trigger('change:searchResults');
    },
    addLikePlace: function(e) {
        e.preventDefault();
        var likePlace = $(e.currentTarget).closest('div').find('h5').text(  );
        $('#like-place-list').trigger("add", likePlace);
    },
    el: '#searchResults',
    render: function() {
        var html = template(this.model.toJSON());

        this.$el.html(html);

        return this.$el;
    }
});
