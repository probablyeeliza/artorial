import "../App.css";
import SearchBar from "../Components/SearchBar";
import ForumCard from "../Components/ForumCard";
import ForumData from "../community.json";


export function Community() {
    return(
         <div className="App">
            <div className="Mobile-Screen">
                <header className="App-Header">Community!</header>
                <SearchBar />
                <div className="forum-list">
                    {ForumData.map((forum) => (
                        <ForumCard
                            key={forum.forum_id}
                            title={forum.title}
                           category={forum.category}
                            date={forum.date}
                        />
                    ))}
                </div>

            </div>
                
        </div>
    )
}