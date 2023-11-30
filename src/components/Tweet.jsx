import React from "react";

import Verified from "../Icons/Verified.png"
import TweetAction from "./TweetAction";
import Buton from "../Icons/Buton.png"
import Retweet from "../Icons/Retweet.png"
import ReactButton from "../Icons/React.png"
import Share from "../Icons/Share.png"

function Tweet ({userAvatar,titleAuthor,AbbrTitle,times,paragraph,images,countButon,countRetweet,countReact}) {

    return(

        <div className="tweet">

              <img src={userAvatar} alt="tweet-profile-photo.png"/>

              <div className="tweet-content">

                <div className="tweet-body">

                    <div className="tweet-title">

                        <p className="tweet-title-author">{titleAuthor} <img src={Verified} alt="Verified.png"/>
                            <span className="tweet-title-details">{AbbrTitle}</span>
                            <span className="tweet-title-details">.</span>
                            <span className="tweet-title-details">{times}</span>
                        </p>
                    </div>

                    <p className="tweet-text">{paragraph}</p>

                    <div className="tweet-image">
                        <img src={images} />
                    </div>
                    

                </div>
                <div className="tweet-actions">

                       <TweetAction actionButton={Buton} count={countButon}/>
                       <TweetAction actionButton={Retweet} count={countRetweet}/>
                       <TweetAction actionButton={ReactButton} count={countReact}/>
                       <TweetAction actionButton={Share}/>

                </div>

                
              </div>  
        </div>
        
    )
}

export default Tweet;