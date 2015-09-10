var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    getInitialState: function() {
        return {inputValue: ''};
    },

    handleSearch: function(){
        this.props.onSearch(this.state.inputValue);
        this.setState({inputValue: ''})
    },

    handleInput: function(){
        this.setState({inputValue: event.target.value});
    },

    render: function(){
        return (
            <div>
                <div className="large-9 medium-9 columns">
                    <input type="text" id="locationInput" value="" placeholder="Type a location name to search" value={this.state.inputValue} onChange={this.handleInput} />
                </div>
                <div className="large-3 medium-3 columns">
                <input type="button" class="submit button tiny" id="searchButton" value="search" onClick={this.handleSearch}/>
                </div>
            </div>
        )
    }
});