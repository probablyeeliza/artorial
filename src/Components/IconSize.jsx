import { createContext, useState, useEffect } from "react";

export const IconSize = createContext();

export function IconSizeProvider({ children }) {
  // Read from localStorage or default to 40px
  const [iconSize, setIconSize] = useState(() => {
    const stored = localStorage.getItem("iconSize");
    return stored ? JSON.parse(stored) : 40;
  });

  // Apply icon size globally and save to localStorage
  useEffect(() => {
    document.documentElement.style.setProperty("--icon-size", `${iconSize}px`);
    localStorage.setItem("iconSize", JSON.stringify(iconSize));
  }, [iconSize]);

  // Limits
  const ICON_MIN = 30;
  const ICON_MAX = 50;

  // Functions to increase/decrease/reset
  const increaseIcon = () => setIconSize(prev => Math.min(ICON_MAX, prev + 4));
  const decreaseIcon = () => setIconSize(prev => Math.max(ICON_MIN, prev - 4));
  const resetIcon = () => setIconSize(40);

  return (
    <IconSize.Provider
      value={{
        iconSize,
        increaseIcon,
        decreaseIcon,
        resetIcon
      }}
    >
      {children}
    </IconSize.Provider>
  );
}