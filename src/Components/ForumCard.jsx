import React from 'react';
import "../Css//Community.css"


function ForumCard({title, category, forum_id, date}) {
    return(
        <div className="forum-card">
                <div className="forum-column">
                    <h3 className="forum-title">{title}</h3> 
                    <p className='forum-date'>{date}</p>
                </div>
            <div className="forum-category"> Category: {category}</div>
            <div className="forum-arrow">→</div>
        </div>
    );

};
export default ForumCard;