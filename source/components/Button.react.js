var React = require('react');

var ButtonStyle = {
	margin: '10px 10px 10px 0'
};

var Button = React.createClass({
	render: function(){
		return (
				<button className="btn btn-default" style={this.ButtonStyle} onClick={this.props.handleClick}>{this.props.label}</button>
			)
	}
});

module.exports = Button;	