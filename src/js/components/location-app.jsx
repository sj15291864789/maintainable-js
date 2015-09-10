var React = require('react');
var _ = require('lodash');
var $ = require('jquery');

var SearchForm = require('./search-form.jsx');
var ResultList = require('./result-list.jsx');

var LikeList = require('./like-list.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        var data = [
            {"id": 1, name: "beijing1234124", "description": "didu123", "isLiked": true},
            {"id": 2, name: "shanghai", "description": "modu", "isLiked": false}
        ];

        return {locations: data};
    },

    handleSearch: function (text){
        var location = text;
        var queryparam = 'name=' + location||'';
        var self = this;
        $.get('http://location-backend-service.herokuapp.com/locations?' + queryparam)
            .done(function(data) {
                var id = 0;
                _.map(data, function(location) {
                    location.isLiked = false;
                    location.id = id;
                    id++;
                });
                self.setState({locations: data});
            })
            .fail(function() {
                alert("failed");
            });
    },

    handleLike: function (id){
        var locations = this.state.locations;
        var location = _.first(_.where(locations, {id: id}));
        location.isLiked = !location.isLiked;

        this.setState({locations: locations});
    },

    render: function(){
        return (
            <div>
                <div className="row">
                    <div id="searchForm">
                        <SearchForm onSearch={this.handleSearch}/>
                    </div>
                </div>

                <div className="row">
                    <hr className="large-12 columns"/>
                </div>

                <div className="row">
                    <div id="searchResults" className="large-8 medium-8 columns">
                        <ResultList locations={this.state.locations} onLike={this.handleLike}/>
                    </div>

                    <div id="likedPlaces" className="large-4 medium-4 columns">
                        <LikeList locations={this.state.locations} onLike={this.handleLike}/>
                    </div>
                </div>
            </div>
        )
    }
});