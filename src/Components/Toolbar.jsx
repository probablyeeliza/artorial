import { Link } from "react-router-dom";
import '../Css/Toolbar.css'

// remember to remove the home 
export function ToolBar(){
    return(
        <nav className="toolbar">
            <Link to="/"> Profile </Link>
            <Link to="/challenge"> Challenge</Link>
            <Link to="/community"> Community</Link>
            <Link to="/tutorial"> Tutorial</Link>
            <Link to="/settings"> Settings </Link>
            
        </nav>
    );
};

export default ToolBar;