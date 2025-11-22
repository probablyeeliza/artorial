import "../App.css";
import "../Css/Accessibility.css"
import { Link } from "react-router-dom";
import FontControl from "../Components/FontControl"



export function Accessibility() {
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <Link to="/settings">
                        <button className="back-btn">Back</button>
                    </Link>
                
                <header className="App-Header">Accessibility!</header>
                <div className="content">
                    <h1>Font Size</h1>
                    <FontControl/>
                </div>
            </div>
         </div>
    )
}