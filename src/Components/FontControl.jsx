import { useContext } from "react";
import { FontSizeContext } from "./FontSizeContext";
import "../App.css";

export function FontControl() {
  const { 
    increaseTitle,
    decreaseTitle,
    increaseBody,
    decreaseBody,
    resetFontSizes  } = useContext(FontSizeContext);

  return (
    <div className="font-controls-container">
      <div className="font-controls-row">
        <div className="font-controls">
          {/* Title controls */}
          <p>Title Size</p>
          <button className="button" onClick={decreaseTitle}>- A</button>
          <button className="button" onClick={increaseTitle}>+ A</button>
          {/* Body controls */}
          <p>Body Size</p>
          <button className="button" onClick={decreaseBody}>- A</button>
          <button className="button" onClick={increaseBody}>+ A</button>
        </div>
      </div> 
        
        {/* Default*/}
        <button className="button" onClick={resetFontSizes}>
        Reset to Default
        </button>
    </div>
  );
}

export default FontControl;