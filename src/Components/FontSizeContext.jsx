import { createContext, useState, useEffect  } from "react";

export const FontSizeContext = createContext();

export function FontSizeProvider({ children }) {
  const [titleSize, setTitleSize] = useState(24);
  const [bodySize, setBodySize] = useState(16);

  useEffect(() => {
  document.documentElement.style.setProperty("--title-size", `${titleSize}px`);
  document.documentElement.style.setProperty("--body-size", `${bodySize}px`);
}, [titleSize, bodySize]);

  // Limits
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