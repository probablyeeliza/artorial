
import React, { useState } from "react";
import TutorialCard from "../Components/TutorialCard";
import SearchBar from "../Components/SearchBar";
import tutorialData from "../tutorials.json";
import "../Css/Tutorial.css"
import "../App.css";

export function Tutorial() {
    /* declares react state using the useState hook, holds current text and drives filtering*/
    const [search, setSearch] = useState("");

    const filteredData = tutorialData.filter((tutorial) => {
        const term = search.toLowerCase();
        return (
            tutorial.category.toLowerCase().includes(term) ||
            tutorial.title.toLowerCase().includes(term)
        );
    });

    return(
        <div className="App">
            <div className="Mobile-Screen">
                <div className="tutorial-page">
                    <div>
                        <header className="App-Header">Tutorials!</header>
                        <SearchBar search={search} setSearch={setSearch} />
                    </div>
                    <div className="tutorial-list">
                    {filteredData.map((tutorial) => (
                        <TutorialCard
                            key={tutorial.id}
                            id={tutorial.id}
                            category={tutorial.category}
                            title={tutorial.title}
                            tips={tutorial.tips}
                        />
                    ))}
                    </div>
            </div>
            </div>
        </div>
    )
}