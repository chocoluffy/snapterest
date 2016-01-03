var React = require('react');
var Stream = require('./Stream.react.js');
var Collection = require('./Collection.react.js');

var Application = React.createClass({
	getInitialState: function(){
		return {
			collectionTweets: {}
		};
	},

	addTweetToCollection: function(tweet){
		var collection = this.state.collectionTweets;
		collection[tweet.id] = tweet;
		this.setState({
			collectionTweets: collection
		});
	},

	removeTweetFromCollection: function(tweet){
		var collection = this.state.collectionTweets;
		delete collection[tweet.id];
		this.setState({
			collectionTweets: collection
		});
	},

	removeAllTweetsFromCollection: function(){
		this.setState({
			collectionTweets: {}
		})
	},

	render: function(){
		return (
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4 text-center">
							<Stream onAddTweetToCollection={this.addTweetToCollection} />
						</div>
						<div className="col-md-8">
							<Collection tweets={this.state.collectionTweets} onRemoveTweetFromCollection={this.removeTweetFromCollection}
							 onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
						</div>
					</div>
				</div>
			)
	}
});

module.exports = Application;

































