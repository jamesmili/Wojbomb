import axios from "axios";

/*
* Retrieves tweets from r/NBA subreddit
* @return an array of tweets
*/

export var getTweets = () => {
  var urls = new Set()
  var url = "https://www.reddit.com/r/nba/search.json?q=url%3Atwitter&restrict_sr=on&sort=new&t=week";
  return axios.get(url).then(res =>{
    var posts = []
    var tweetUrl
    res.data.data.children.map(function(obj) {
      tweetUrl = obj.data.url.toLowerCase()
      if (obj.data.url.includes("twitter") && !urls.has(tweetUrl)){
        posts.push(obj.data)
        urls.add(tweetUrl)
      }
    });
    return posts;
  });
}