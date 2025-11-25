import React from "react";
import "../Css/SearchBar.css";

export function SearchBar( {search, setSearch} ){
    return(
        <input
            type="text"
            className="Search-Bar"
            placeholder="Search..."
            value={search}
            onChange = {(e) => setSearch(e.target.value)}/>
    )
}
export default SearchBar;