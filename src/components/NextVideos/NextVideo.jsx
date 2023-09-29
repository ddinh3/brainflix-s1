import "./NextVideo.scss";
import { Link } from "react-router-dom"

function NextVideo(props) {
  return (
    <Link to={`/videos/${props.id}`} className="video-link">
      <div className="next__video">
        <img
          src={props.image}
          alt={props.title} className="next__video-img" />
      <div className="next__video-info">
        <h3 className="next__video-name">{props.title}</h3>
        <p className="next__video-author">{props.author}</p>
        </div>
      </div>
    </Link>
  );
}

export default NextVideo;
