import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/Tweet-editor';
import Tweet from '../components/Tweet';
import AvatarCnn from "../images/tweet-profile-photo.png"
import Image1 from "../images/image 1 (3).png"
import TweetImage from "../images/tweet-image.png"
import Tweeter from "../images/image 1 (4).png"

function Home() {

  return (
    <main className="timeline">

      <Header />
      <TweetEditor />
      <Tweet userAvatar={AvatarCnn} titleAuthor={"CNN"} AbbrTitle={"@CNN"} times={"7m"} paragraph={'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'} countButon={"57"} countRetweet={"144"} countReact={"183"} />
      <Tweet userAvatar={Image1} titleAuthor={"The New York Times"} AbbrTitle={"@nytimes"} times={"2h"} paragraph={'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land'} images={TweetImage} countButon={"10"} countRetweet={"48"} countReact={"182"} />
      <Tweet userAvatar={Tweeter} titleAuthor={"Tweeter"} AbbrTitle={"@Tweeter"} times={"Oct 29"} paragraph={'BIG NEWS lol jk still Twitter'} countButon={"6.8k"} countRetweet={"36.6k"} countReact={"267.1"} />
      <Tweet userAvatar={Tweeter} titleAuthor={"Tweeter"} AbbrTitle={"@Tweeter"} times={"Oct 4"} paragraph={'hello literally everyone'} countButon={"118.7k"} countRetweet={"785.4k"} countReact={"3.3M"} />
      <Tweet userAvatar={Tweeter} titleAuthor={"Tweeter"} AbbrTitle={"@Tweeter"} times={"Oct 4"} paragraph={'hello literally everyone'} images={TweetImage} countButon={"118.7k"} countRetweet={"785.4k"} countReact={"3.3M"} />
    </main>

  );

}

export default Home;