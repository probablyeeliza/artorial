import "../Css/Settings.css"
import "../App.css";
import { useNavigate } from "react-router-dom";

export function Settings() {
    const navigate = useNavigate();
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <header className="App-Header">Settings!</header>
                <div className="settings-item">
                    <h2>Help?</h2>
                    <h1 className="dropbtn">→</h1>
                </div>
                <div className="settings-item" 
                onClick={() => navigate(`/accessibility`)}
                style={{ cursor: "pointer" }}> 
                    <h2>Accessibilty</h2>
                    
                    <h1 className="dropbtn">→</h1>
                </div>
                <div className="settings-item">
                    <h2>Terms of Service</h2>
                    <h1 className="dropbtn">→</h1>
                </div>
            </div>
         </div>
    )
}