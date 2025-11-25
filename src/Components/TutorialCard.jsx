import React from 'react';
import "../Css/TutorialCard.css"
import { useNavigate } from "react-router-dom";

export function TutorialCard({category, title, id}) {
      const navigate = useNavigate();
    return(
        <div className="tutorial-card"
        onClick={() => navigate(`/tutorial/${id}`)}
        style={{ cursor: "pointer" }}>
            <h3 className="tutorial-category">{category}</h3>
            <h3 className="tutorial-title">{title}</h3>
            <div className="tutorial-arrow">→</div>
        </div>
    );
};
export default TutorialCard;