var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

	getInitialState: function(){
		console.log("[Snapterest] StreamTweet: 1.  running getInitialState() ");

		return (
				numberOfCharacterIsIncreasing: null,
				headerText: null
			)
	},

	componentWillMount: function(){
		console.log("[Snapterest] StreamTweet: 2.  running componentWillMount() ");

		this.setState({
			numberOfCharacterIsIncreasing: true;
			headerText: 'Latest public photo from Twitter'
		});

		window.snapterest = {
			numberOfReceivedTweets: 1,
			numberOfDisplayedTweets: 1
		}
	},

	componentDidMount: function(){
		console.log("[Snapterest] StreamTweet: 3. running componentDidMount() ");

		var componentDOMRepresentation = ReactDOM.findDOMNode(this);

		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML; 
	},

	componentWillReceiveProps: function(nextProps){
		console.log("[Snapterest] StreamTweet: 4. running componentWillReceiveProps() ");
		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.text.length;
		var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
		var headerText;

		this.setState({
			numberOfCharacterIsIncreasing: isNumberOfCharactersIncreasing;
		});

		if(isNumberOfCharactersIncreasing){
			headerText = "Number of characters is increasing.";
		}else{
			headerText = "Latest public photo from Twitter";
		}

		this.setState({
			headerText : headerText;
		});

		window.snapterest.numberOfReceivedTweets++;
	},

	shouldComponentUpdate: function(nextProps, nextState){
		console.log("[Snapterest] StreamTweet: 5. running shouldComponentUpdate()");

		return (nextProps.tweet.text.length > 1);
	},

	componentWillUpdate: function(nextProps, nextState){
		console.log("[Snapterest] StreamTweet: 6. running componentWillUpdate");
	},

	componentDidUpdate: function(prevProps, prevState){
		console.log("[Snapterest] StreamTweet: 7. running componentDidUpdate()");

		window.snapterest.numberOfDisplayedTweets++;
	},

	componentWillUnmount: function(){
		console.log("[Snapterest] StreamTweet: 8. running componentWillUnmount() ");
		delete window.snapterest
	},


	render: function(){
		console.log("[Snapterest] StreamTweet: running render() ");

		return (
				<section>
					<Header text={this.state.headerText} />
					<Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
				</section>
			)
	}

});

module.exports = StreamTweet;













