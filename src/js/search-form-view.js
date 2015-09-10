var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var template = require("../templates/search-view.hbs");

module.exports =  Backbone.View.extend({
    initialize: function() {
    },
    events: {
        'click #searchButton': 'search'
    },
    search: function(e) {
        var location = $('#locationInput').val();
        var queryparam = 'name=' + location||'';
        $.get('http://location-backend-service.herokuapp.com/locations?' + queryparam)
            .done(function(data) {
                $('#results').trigger("display", {data: data});
            })
            .fail(function() {
                alert("failed");
            });
    },
    el: '#searchForm',
    render: function() {
        this.$el.html(template);
        //this.$el.html('<p>123</p>');

        return this.$el;
    }
});