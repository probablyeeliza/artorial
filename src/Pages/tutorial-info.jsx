import '../App.css';
import { useParams, Link } from "react-router-dom";
import tutorialInfo from "../tutorials.json";
import "../Css/Tutorial-Info.css"

export function TutorialInfo() {
    const { id } = useParams();

    const tutorial = tutorialInfo.find(
        t => t.id === Number(id)
    );

    if (!tutorial) {
  return <p>Tutorial not found.</p>;}

    return(
        <div className="App">
            <div className="Mobile-Screen">
                <div className='tutorial-header'>
                    <Link to="/tutorial">
                        <button className="back-btn">Back</button>
                    </Link>
                    <h2>{tutorial.title}</h2>
                </div>
                <div className="tutorial-content">
                    <p>{tutorial.desc}</p>
                    {Array.isArray(tutorial.tips) && (
                    <ul className="tips-list">
                    {tutorial.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                    </ul>
                    )}
                </div>
            </div>
        </div>
    )
}