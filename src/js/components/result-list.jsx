var React = require('react');
var _ = require('lodash');

var ResultItem = require('./result-item.jsx');

module.exports = React.createClass({
    render: function () {
        var self = this;
        var resultItems = _.map(this.props.locations, function (location) {
            return <ResultItem location={location} onLike={self.props.onLike}/>;
        });
        return (
            <div className="row">
                <h4>Search results</h4>
                <div id="results">
                    {resultItems}
                </div>
            </div>
        );
    }
});
