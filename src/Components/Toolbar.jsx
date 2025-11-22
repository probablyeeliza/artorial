import { Link } from "react-router-dom";
import '../Css/Toolbar.css'
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { LuSwords } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

// remember to remove the home 
export function ToolBar(){
     const [selected, setSelected] = useState(null); // initially nothing selected

  const handleClick = (name) => {
    if (selected === name) {
      setSelected(null); // deselect if clicked again
    } else {
      setSelected(name); // select
    }
  };
    return(
        <nav className="toolbar">
            <Link to="/"> <IoMdPerson size={40} className={selected === "profile" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("profile")}/> </Link>
            <Link to="/challenge"> <LuSwords size={40} className={selected === "challenge" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("challenge")}/></Link>
            <Link to="/community"> <IoPeople size={40} className={selected === "community" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("community")}/></Link>
            <Link to="/tutorial"> <TbWriting size={40} className={selected === "tutorial" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("tutorial")}/></Link>
            <Link to="/settings"> <IoMdSettings size={40} className={selected === "settings" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("settings")}/></Link>
            
        </nav>
    );
};

export default ToolBar;