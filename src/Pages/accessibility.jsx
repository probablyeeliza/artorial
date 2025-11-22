import "../App.css";
import "../Css/Accessibility.css"
import { Link } from "react-router-dom";
import FontControl from "../Components/FontControl"



export function Accessibility() {
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <nav>
                <Link to="/settings">
                        <button className="back-btn">Back</button>
                    </Link>
                </nav>
                <header className="App-Header">Accessibility!</header>
                <div className="content">
                    <h2>Font Size</h2>
                    <FontControl/>
                </div>
            </div>
         </div>
    )
}