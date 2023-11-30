

function TweetAction ({actionButton,count}){

    return(
        <div className="tweet-action">

            <button className="button-style"><img src={actionButton} alt="Icons"/></button>

            <p>{count}</p>
        </div>
    )
}

export default TweetAction;