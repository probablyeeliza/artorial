import './App.css';
import { useContext, useEffect } from "react";
import { FontSizeContext } from "./Components/FontSizeContext";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Challenge } from './Pages/challenge';
import { Community } from './Pages/community';
import { Tutorial } from './Pages/tutorial';
import { Profile } from './Pages/profile';
import { Settings } from './Pages/settings';
import { ChallengePosts } from './Pages/challenge-posts';
import { TutorialInfo } from './Pages/tutorial-info';
import { Layout } from './Layout';
import { Accessibility } from "./Pages/accessibility";

function App() {
  useEffect(() => {
    const stored = localStorage.getItem("dark");
    const darkMode = stored ? JSON.parse(stored) : false;
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);
  
  const { fontSize } = useContext(FontSizeContext);
   useEffect(() => {
    document.documentElement.style.setProperty('--user-font-size', fontSize + "px");
  }, [fontSize]);

  return (
    //creates routes to all the pages using the react-router-dom library
    //all the routes are wrapped in the parent Layout
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path="/" element={<Profile/>}/>
            <Route path="/challenge" element={<Challenge/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/tutorial" element={<Tutorial/>}/>
            <Route path="/challenge/:id" element={<ChallengePosts/>}/>
            <Route path="/tutorial/:id" element={<TutorialInfo/>}/>
            <Route path="/accessibility" element={<Accessibility/>}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
