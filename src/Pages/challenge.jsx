import React from "react";
import ChallengeCard from "../Components/ChallengeCard";
import challengeData from "../challenges.json";
import "../Css/Challenges.css"
import "../App.css";

export function Challenge() {
    return(
            <div className="App">
                <div className="Mobile-Screen">
               <div className="challenges-page">
                <header className="App-Header">Challenges!</header>

                <div className="challenges-list">
                {challengeData.map((challenge) => (
                    <ChallengeCard
                        key={challenge.id}
                        title={challenge.title}
                        desc={challenge.desc}
                        id={challenge.id} // pass the id so my button works
                    />
                ))}
               </div>
               </div>
               </div>
            </div>
    )
}
export default Challenge;