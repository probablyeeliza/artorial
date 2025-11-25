import { useState } from "react";
import "../App.css";
import SearchBar from "../Components/SearchBar";
import ForumCard from "../Components/ForumCard";
import ForumData from "../community.json";


export function Community() {
    const [search, setSearch] = useState("");

    const filteredData = ForumData.filter((forum) => {
        const term = search.toLowerCase();
        return (
            forum.category.toLowerCase().includes(term) ||
            forum.title.toLowerCase().includes(term)
        );
    });
    
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <header className="App-Header">Community!</header>
                <SearchBar search={search} setSearch={setSearch}/>
                <div className="forum-list">
                     {filteredData.length === 0 ? (
                        <h2>No Forums found!</h2>
                        ) : (
                    filteredData.map((forum) => (
                        <ForumCard
                            key={forum.forum_id}
                            title={forum.title}
                           category={forum.category}
                            date={forum.date}
                        />
                       )))}
                </div>

            </div>
                
        </div>
    )
}