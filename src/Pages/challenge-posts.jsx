import '../App.css';
import { useParams, Link } from "react-router-dom";
import postData from "../challenge-posts.json";
import "../Css/ChallengePost.css"

export function ChallengePosts() {
    const { id } = useParams(); // Must match route param

    const filteredPosts = postData.filter(post => post.cardId === Number(id));

    return(
        <div className="App">
            <div className="Mobile-Screen">
                <Link to="/challenge">
                    <button className="back-btn">Back</button>
                </Link>
                <div className="post-content">
                <h2>Posts for Challenge {id} </h2>
                {filteredPosts.length === 0 ? (
                    <p>No posts yet for this challenge.</p>
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