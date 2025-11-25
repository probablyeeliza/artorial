import { useEffect, useState } from "react";

export function LightDarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Read from localStorage BEFORE React renders
    const stored = localStorage.getItem("dark");
    // default to light mode
    return stored ? JSON.parse(stored) : false;
  });

  // Apply theme whenever darkMode changes
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
//The button
  return (
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