var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    onToggle: function(e) {
        e.preventDefault();
        this.props.onLike(this.props.location.id);
    },
    render: function () {
        return (
            <div className="panel large-12 columns">
                <h5>{this.props.location.name}</h5>
                <h6>{this.props.location.description}</h6>
                <a href="#" className="like button tiny right" onClick={this.onToggle}>
                    { this.props.location.isLiked ? 'UNLIKE' : 'LIKE' }</a>
            </div>
        );
    }
});