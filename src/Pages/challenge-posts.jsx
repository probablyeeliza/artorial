import '../App.css';
import { useParams, Link } from "react-router-dom";
import postData from "../challenge-posts.json";
import challengeData from "../challenges.json";
import "../Css/ChallengePost.css"

export function ChallengePosts() {
    const { id } = useParams(); // Must match route param

    const filteredPosts = postData.filter(post => post.cardId === Number(id));
    const challenge = challengeData.find(c => c.id === Number(id));

    return(
        <div className="App">
            <div className="Mobile-Screen">
                <Link to="/challenge">
                    <button className="back-btn">Back</button>
                </Link>
                <div className="post-content">
                <h2>Posts for "{challenge ? challenge.title : `Challenge ${id}`}"</h2>
                {filteredPosts.length === 0 ? (
                    <h3 className="no-results">No posts yet for this challenge.</h3>
                ) : (
                    filteredPosts.map(post => (
                        <div key={post.postId} className="post-card">
                            <h3>{post.username}</h3>
                            <img
                                src={post.picture}
                                alt={post.username}
                                style={{ width: "50px", borderRadius: "50%" }}
                            />
                            <p>{post.content}</p>
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    )
}
export default ChallengePosts;