import React from 'react';
import AvatarTweetEditor from "../images/profile-photo.png"
import Media from "../Icons/Media.png"
import Gif from "../Icons/Gif.png"
import Poll from "../Icons/Poll.png"
import Emoji from "../Icons/Emoji.png"
import Schedule from "../Icons/Schedule.png"



function TweetEditor() {

   return (
       <div className="tweet-editor">

          <img className='avatar' src = {AvatarTweetEditor} alt='logo' />

          <div className='tweet-editor-form'>
            <input className='tweet-editor-input' type='text' placeholder='What’s happening?' />

            <div className='tweet-editor-buttons'>

               <div className='tweet-editor-actions'>
                  <button className='button-style'>
                     <img src={Media} alt=''/>
                  </button>

                  <button className='button-style'>
                     <img src={Gif} alt=''/>
                  </button>

                  <button className='button-style'>
                     <img src={Poll} alt=''/>
                  </button>

                  <button className='button-style'>
                     <img src={Emoji} alt=''/>
                  </button>

                  <button className='button-style'>
                     <img src={Schedule} alt=''/>
                  </button>
               </div>
               <button className="button">tweet</button>
            </div>

            


          </div>

          
       </div>
   )
}

export default TweetEditor;