var React = require('react');
var ReactDOMServer = require('react/dom-server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
	createHtmlMarkupStringOfTweetList: function(){
		var htmlString = ReactDOMServer.renderToStaticMarkup(<TweetLlist tweets={this.props.tweets} />);

		var htmlMarkup = {
			html: htmlString;
		};

		return Json.stringify(htmlMarkup);
	},


	getListOfTweetIds: function(){
		return Object.keys(this.props.tweets);
	},

	getNumberOfTweetsInCollection: function(){
		return this.getListOfTweetIds().length;
	},

	render: function(){
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
		if(numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveTweetFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveAllTweetsFromCollection;

			return (
					<div>
						<CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection} htmlMarkup={htmlMarkup} 
						onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection} />

						<TweetList tweets={tweets} onRemoveTweetFromCollection={onRemoveTweetFromCollection} />
					</div>
				);
		}

		return <Header text="Your collection is empty now!" />
	}

});

module.exports = Collection;




































