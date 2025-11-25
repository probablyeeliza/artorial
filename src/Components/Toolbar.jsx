import { Link } from "react-router-dom";
import '../Css/Toolbar.css'
import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { LuSwords } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

export function ToolBar(){
    // Makes it so nothing is selected initially
    const [selected, setSelected] = useState(null); 

    const handleClick = (name) => {
        setSelected(name);
    };

    // Links to all the different pages and uses the icons from the react icon library
    //Also changes colour when selected
    return(
        <nav className="toolbar">
            <Link to="/"> <IoMdPerson className={selected === "profile" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("profile")}/> </Link>
            <Link to="/challenge"> <LuSwords  className={selected === "challenge" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("challenge")}/></Link>
            <Link to="/community"> <IoPeople  className={selected === "community" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("community")}/></Link>
            <Link to="/tutorial"> <TbWriting className={selected === "tutorial" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("tutorial")}/></Link>
            <Link to="/settings"> <IoMdSettings  className={selected === "settings" ? "toolbar-icon selected" : "toolbar-icon"}
                onClick={() => handleClick("settings")}/></Link>
            
        </nav>
    );
};

export default ToolBar;