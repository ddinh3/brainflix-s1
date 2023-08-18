import "./NextVideo.scss";

function NextVideo(props) {
  return (
    <div
      className="next__video"
      onClick={() => {
        props.handleVideoClick(props.title);
      }}>
      <img src={props.url} alt={props.title} className="next__video-img" />
      <div className="next__video-info">
        <h3 className="next__video-name">{props.title}</h3>
        <p className="next__video-author">{props.author}</p>
      </div>
    </div>
  );
}

export default NextVideo;
