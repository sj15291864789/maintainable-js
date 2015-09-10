var React = require('react');
var _ = require('lodash');

var LikeItem = require('./like-item.jsx');

module.exports = React.createClass({
    render: function () {
        var self = this;
        var likeLocations = _.filter(this.props.locations, function (location) {
            return location.isLiked;
        });
        var likedItems = _.map(likeLocations, function (location) {
            return <LikeItem likelocation={location} onLike={self.props.onLike}/>;
        });
        return (
            <div>
                <h4>Places I liked</h4>
                <nav>
                    <ul id="like-place-list">
                        {likedItems}
                    </ul>
                </nav>
            </div>
        );
    }
});