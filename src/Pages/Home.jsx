import React, { useState, useEffect } from "react";
import MainVideo from "../components/MainVideo/MainVideo";
import MainVideoDescription from "../components/MainVideo/MainVideoDescription/MainVideoDescription";
import CommentsList from "../components/Comments/CommentsList/CommentsList";
import NextList from "../components/NextVideos/NextVideoList/NextVideoList";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [comments, setComments] = useState([]);
  const API_URL = "http://localhost:8080"; 

  useEffect(() => {
    axios.get(`${API_URL}/videos`)
      .then((response) => {
        setVideoList(response.data);
        let videoId = id || response.data[0]?.id;
        if (videoId) {
          return axios.get(`${API_URL}/videos/${videoId}`);
        }
      })
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id])

  return (
    <>
      {currentVideo && <MainVideo currentVideo={currentVideo} />}
      <div className="bigcontainer">
        <section className="video">
          {currentVideo && <MainVideoDescription currentVideo={currentVideo} />}
          {currentVideo && (
            <CommentsList
              currentVideo={currentVideo}
              API_URL={API_URL}
              setComments={setComments}
            />
          )}
        </section>
        {videoList && currentVideo && (
          <NextList
            videoList={videoList.filter((video) => video.id !== currentVideo.id)}
          />
        )}
      </div>
    </>
  );
}

export default Home;
