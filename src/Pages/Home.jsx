import MainVideo from "../components/MainVideo/MainVideo";
import MainVideoDescription from "../components/MainVideo/MainVideoDescription/MainVideoDescription";
import CommentsList from "../components/Comments/CommentsList/CommentsList";
import NextList from "../components/NextVideos/NextVideoList/NextVideoList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [comments, setComments] = useState([]);
  const API_URL = "https://project-2-api.herokuapp.com";
  const API_Key = "?api_key=2d0130ba-bf7d-4e48-8424-88f2b2bb4903";

  useEffect(() => {
    axios.get(`${API_URL}/videos${API_Key}`).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  useEffect(() => {
    let videoId = id || videoList[0]?.id;

    if (videoId) {
      axios.get(`${API_URL}/videos/${videoId}${API_Key}`).then((response) => {
        setCurrentVideo(response.data);
      });
    }
  }, [id, videoList, comments]);

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
              API_Key={API_Key}
              setComments={setComments}
            />
          )}
        </section>
        {videoList && currentVideo && (
          <NextList
            videoList={videoList?.filter(
              (video) => video.title !== currentVideo.title
            )}
          />
        )}
      </div>
    </>
  );
}

export default Home;
