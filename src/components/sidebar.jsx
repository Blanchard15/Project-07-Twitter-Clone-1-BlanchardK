import Twitter from "../Icons/Twitter.png"
import { NavLink } from "react-router-dom";
import userAvatar from "../images/profile-photo.png"
import Home from "../icons/Home-Fill.png"
import Explor from "../icons/Explore.png"
import List from "../icons/Lists.png"
import Notification from "../icons/Notifications.png"
import Message from "../icons/Messages.png"
import More from "../icons/More.png"
import Profile from "../icons/Profile.png"
import booKmark from "../icons/Bookmarks.png"

function Sidebar (){
    return (<div className="sideBar">

            <div className="container">
                

                <nav>
                    <ul className="Active">

                        <li>
                            

                            <img src={Twitter}/>
                        </li>
                        <li><NavLink to="/"><img src={Home} alt="Home-Fill.png"/>Home</NavLink></li>
                        <li><NavLink to="/explor"><img src={Explor} alt="Explore.png"/>Explor</NavLink></li>
                        <li><NavLink to="/notifications"><img src={Notification} alt="Notifications.png"/>Notifications</NavLink></li>
                        <li><NavLink to="messages/"><img src={Message} alt="Messages.png"/>Messages</NavLink></li>
                        <li><NavLink to="/booksmarks"><img src={booKmark} alt="Bookmarks.png"/>Booksmarks</NavLink></li>
                        <li><NavLink to="/lists"><img src={List} alt="Lists.png"/>Lists</NavLink></li>
                        <li><NavLink to="/profile"><img src={Profile} alt="Profile.png"/>Profile</NavLink></li>
                        <li><NavLink to="/more"><img src={More} alt="More.png"/>More</NavLink></li>

                    </ul>
                       
                    
                </nav>

                <button className="button-tweet">Tweet</button>

                <footer>
                    <button className="account">
                        <div className="Avatar">
                            <img src={userAvatar} alt="profile-photo.png"/>
                        </div>
                    </button>
                </footer>
            </div>

        </div>
    )
}

export default Sidebar;