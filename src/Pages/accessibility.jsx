import "../App.css";
import "../Css/Accessibility.css"
import { Link } from "react-router-dom";
import FontControl from "../Components/FontControl"
import { LightDarkModeToggle } from "../Components/LightDarkModeToggle";
import { IconSizeControl } from "../Components/IconSizeControl"



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
                <div className="content">
                    <h2>Theme</h2>
                    <LightDarkModeToggle/>
                </div>
                <div className="content">
                    <h2>Icon Size</h2>
                    <IconSizeControl/>
                </div>
            </div>
         </div>
    )
}