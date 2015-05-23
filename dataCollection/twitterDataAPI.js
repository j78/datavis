var Twit = require('twit');
var fs = require('fs');
var log = fs.createWriteStream('tweets.log');
var twit = new Twit({
	consumer_key : 'CJYczCrifGTmOr0vz0a8Vz77K',
	consumer_secret : 'JQ0ua6uIo65zjin8KqJ7TXjSWuef8X27WJAzFWp8biXFwqoEbm',
	access_token : '309598009-84sMDreatx7hlHVlObBODXZwnoG66K5MGEVxKjnY',
	access_token_secret : 'X7o0Xlrzw3mPlM6rGlLpJgpfQhtPMmRe9xgYwrr9JnCss'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var stream = twit.stream('statuses/filter', { locations: uk });

stream.on('tweet', processTweet);

function processTweet(tweet) {
	var regexp = /[Ff]ootball|[Ss]aturday/g;
	if (regexp.test(tweet.text)) {
		console.log(tweet.text);
	}

	console.log(tweet);
	var strTweet = JSON.stringify(tweet);
	log.write(strTweet);


}
