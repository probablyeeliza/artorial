import { useContext } from "react";
import { IconSize } from "./IconSize";
import "../App.css";

export function IconSizeControl() {
  
  const { increaseIcon, decreaseIcon, resetIcon  } = useContext(IconSize);

  return (
    <div className="icon-controls-container">
        <div className="icon-controls-row">
            <div className="icon-controls">
            {/* Icon size controls */}
            <button className="button" onClick={decreaseIcon}>- </button>
            <button className="button" onClick={increaseIcon}>+ </button>
            </div> 
        </div>
        {/* Default*/}
        <button className="button" onClick={resetIcon}>
        Reset to Default
        </button>
    </div>
  );
}
