var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputStyle = {
	marginRight: '5px'
};

var CollectionRenameForm = React.createClass({
	getInitialState: function(){
		return (
				inputValue: this.props.name
			)
	},

	setInputValue: function(inputValue){
		this.setState({
			inputValue: inputValue
		})
	},

	handleInputValueChange: function(e){
		var inputValue = e.target.value;
		this.setInputValue(inputValue);
	},

	handleFormSubmit: function(e){
		e.preventDefault();

		var collectionName = this.state.inputValue;
		this.props.onChangeCollectionName(collectionName);
	},

	handleFormCancel: function(e){
		e.preventDefault();
		var collectionName = this.props.name;
		this.setInputValue(collectionName);
		this.props.onCancelCollectionName();
	},

	componentDidMount: function(){
		this.refs.collectionName.focus();
	},

	render: function(){
		return (
				<form className="form-inline" onSubmit={this.handleFormSubmit}>
					<Header text="Collection Name: " />

					<div className="form-group" style={inputStyle} onChange={this.handleInputValueChange}
					 value={this.state.inputValue} ref="collectionName" >
					 </div>

					 <Button label="Change" handleClick={this.handleFormSubmit} />
					 <Button label="Cancel" handleClick={this.handleFormCancel} />
				</form>
			)
	}

});

module.exports = CollectionRenameForm;
































