import { useEffect, useState } from "react"; 


export function LightDarkModeToggle() { 
    const [darkMode, setDarkMode] = useState(false); 
    
    // If the user has a preferred theme, load it 
    useEffect(() => {
        const savedMode = 
            localStorage.getItem("darkMode"); 
            if (savedMode === "true") setDarkMode(true); 
                document.documentElement.setAttribute("data-theme", savedMode);
         }, []); 
    //Apply the theme and save preference 
    useEffect(() => { 
        if (darkMode) { 
            document.body.classList.add("dark-mode"); 
        } else { 
            document.body.classList.remove("dark-mode"); } 
        localStorage.setItem("darkMode", darkMode); },
        [darkMode]); 
        //The button 
        return( 
        <div className="theme-container"> 
            <p>Change Theme?</p> 
            <button className="button" 
                onClick={() => setDarkMode(!darkMode)}> {darkMode ? "Light Mode" : "Dark Mode"} 
                </button> 
            </div> 
        ); 
    }