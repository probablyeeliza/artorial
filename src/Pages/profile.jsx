import '../App.css';
import "../Css/Profile.css";

export function Profile() {
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <header className="App-Header">Profile!</header>
                {/* would show the user's username */}
                <div className="profile-banner">Username</div>
                {/* would show a collection of images that the user has posted, clicking on it would open the post and reveal any desc and what they posted it to e.g. challenge or community*/}
                <div className="profile-posts">User Posts</div>
            </div>
         </div>
    )
}