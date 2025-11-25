import { createContext, useState, useEffect  } from "react";

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
   // Read from localStorage first, or set to default
  const [titleSize, setTitleSize] = useState(() => {
    const stored = localStorage.getItem("titleSize");
    return stored ? JSON.parse(stored) : 24;
  });

  const [bodySize, setBodySize] = useState(() => {
    const stored = localStorage.getItem("bodySize");
    return stored ? JSON.parse(stored) : 16;
  });

  // Apply font sizes and save preference to localStorage
  useEffect(() => {
    document.documentElement.style.setProperty("--title-size", `${titleSize}px`);
    document.documentElement.style.setProperty("--body-size", `${bodySize}px`);
    localStorage.setItem("titleSize", JSON.stringify(titleSize));
    localStorage.setItem("bodySize", JSON.stringify(bodySize));
  }, [titleSize, bodySize]);

  // Upper and lower font size limits
  const TITLE_MIN = 18;
  const TITLE_MAX = 40;
  const BODY_MIN = 12;
  const BODY_MAX = 28;

  // Functions with min/max limits
  const increaseTitle = () =>
    setTitleSize(prev => Math.min(TITLE_MAX, prev + 2));

  const decreaseTitle = () =>
    setTitleSize(prev => Math.max(TITLE_MIN, prev - 2));

  const increaseBody = () =>
    setBodySize(prev => Math.min(BODY_MAX, prev + 2));

  const decreaseBody = () =>
    setBodySize(prev => Math.max(BODY_MIN, prev - 2));

  const resetFontSizes = () => {
  setTitleSize(24); // default title size
  setBodySize(16);  // default body size
};

  return (
    <FontSizeContext.Provider
      value={{
        titleSize,
        bodySize,
        increaseTitle,
        decreaseTitle,
        increaseBody,
        decreaseBody,
        resetFontSizes 
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}