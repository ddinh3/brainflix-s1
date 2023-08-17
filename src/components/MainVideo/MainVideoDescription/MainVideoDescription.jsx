import "./MainVideoDescription.scss";
import views from "../../../assets/Icons/views.svg";
import likes from "../../../assets/Icons/likes.svg";

function MainVideoDescription(props) {

    let d = new Date(props.currentVideo.timestamp);
    let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

    return (
        <div className="video__info">
            <h1 className="video__title">{props.currentVideo.title}</h1>
            <div className="video__details">
                <div className="video__left">
                    <p className="video__author video__text">By {props.currentVideo.channel}</p>
                    <p className="video__date video__text">{date}</p>
                </div>
                <div className="video__right">
                    <div className="video__views">
                        <img src={views} alt="Views icon" className="video__icon"></img>
                        <p className="video__views--text video__text">{props.currentVideo.views} </p>
                    </div>
                    <div className="video__likes">
                        <img src={likes} alt="Likes icon" className="video__icon"></img>
                        <p className="video__likes--text video__text">{props.currentVideo.likes} </p>
                    </div>
                </div>
            </div>
            <p className="video__description">{props.currentVideo.description} </p>
        </div>
    );
}

export default MainVideoDescription;