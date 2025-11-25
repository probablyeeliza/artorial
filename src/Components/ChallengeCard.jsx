import React from 'react';
import "../Css//ChallengeCard.css"
import { Link } from "react-router-dom";


function ChallengeCard({title, desc, id}) {
    return(
        <div className="challenge-card">
            <h3 className="challenge-title">{title}</h3>
            <div className="challenge-desc">{desc}</div>
            {/* Links to the corresponding challenge-posts page*/}
            <Link to={`/challenge/${id}`}>
                <button className="button">View Posts</button>
            </Link>
        </div>
    );

};
export default ChallengeCard;