import { useEffect, useState } from "react";

export function LightDarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // If the user has a preferred theme, load it
    useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") 
        {   
            setDarkMode(true);
            document.documentElement.setAttribute("data-theme", savedMode);
        } else {
            setDarkMode(false);
            document.documentElement.setAttribute("data-theme", "light");
        }
  }, []);

    //Apply the theme and save preference
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.body.classList.remove("light-mode");
            document.documentElement.setAttribute("data-theme", "light");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    //The button
    return(
        <div className="theme-container">
        <p>Change Theme?</p>
        <button
            className="button"
            onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
        </button> 
        </div>
    );
}