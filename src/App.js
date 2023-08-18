import React, {useState} from "react";
import Header from "./components/Header/Header";
// import './App.css';
import MainVideo from "./components/MainVideo/MainVideo";
import MainVideoDescription from "./components/MainVideo/MainVideoDescription/MainVideoDescription";
import CommentsList from "./components/Comments/CommentsList/CommentsList";
import NextList from "./components/NextVideos/NextVideoList/NextVideoList";
import videoList from "../src/Data/video-details.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  const handleClick = (title) => {
    const foundVideo = videoList.find((video) => video.title === title);
    setCurrentVideo(foundVideo);
  };
  
  return (
    <div className="App">
      <Header />
      <MainVideo currentVideo={currentVideo} />
      <div className="bigcontainer">
        <section className="video">
          <MainVideoDescription currentVideo={currentVideo} />
          <CommentsList currentVideo={currentVideo} />
        </section>
        <NextList videoList={videoList.filter((video) => video.title !== currentVideo.title)} handleVideoClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
