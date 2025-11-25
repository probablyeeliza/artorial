
import React, { useState } from "react";
import TutorialCard from "../Components/TutorialCard";
import SearchBar from "../Components/SearchBar";
import tutorialData from "../tutorials.json";
import "../Css/Tutorial.css"
import "../App.css";

export function Tutorial() {
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
                    <header className="App-Header">Tutorials!</header>
                    <SearchBar search={search} setSearch={setSearch} />
                    <div className="tutorial-list">
                     {filteredData.length === 0 ? (
                        <h2>No tutorials found</h2>
                        ) : (
                    filteredData.map((tutorial) => (
                        <TutorialCard
                            key={tutorial.id}
                            id={tutorial.id}
                            category={tutorial.category}
                            title={tutorial.title}
                            tips={tutorial.tips}
                        />
                    )))}
                    </div>
            </div>
            </div>
        </div>
    )
}