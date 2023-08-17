import React, {useState} from "react";
import Header from "./components/Header/Header";
import './App.css';
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoDescription from "./components/MainVideo/MainVideoDescription/MainVideoDescription";
import CommentsList from "./components/Comments/CommentsList/CommentsList";
import videoList from "../src/Data/video-details.json";


function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0])
  
  return (
    <div className="App">
      <Header />
      <MainVideo currentVideo={currentVideo} />
      <div className="container">
        <section className="video">
          <MainVideoDescription currentVideo={currentVideo} />
          <CommentsList currentVideo={currentVideo} />
        </section>
      </div>
    </div>

  );
}


export default App;
