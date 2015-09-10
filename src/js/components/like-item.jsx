var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    onToggle: function(e) {
        e.preventDefault();
        this.props.onLike(this.props.likelocation.id);
    },
    render: function () {
        return (
            <div className="panel large-12 columns">
                <h5>{this.props.likelocation.name}</h5>
                <a href="#" className="like button tiny right" onClick={this.onToggle}>
                    UNLIKE</a>
            </div>
        );
    }
});