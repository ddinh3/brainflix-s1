import "./MainVideoDescription.scss";
import views from "../../../assets/Icons/views.svg";
import likes from "../../../assets/Icons/likes.svg";

function MainVideoDescription(props) {
    let d = new Date(props.currentVideo.timestamp);
    let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

    return (
        <div className="MainVideoDescription__info">
            <h1 className="MainVideoDescription__title">{props.currentVideo.title}</h1>
            <div className="MainVideoDescription__details">
                <div className="MainVideoDescription__left">
                    <p className="MainVideoDescription__author MainVideoDescription__text">By {props.currentVideo.channel}</p>
                    <p className="MainVideoDescription__date MainVideoDescription__text">{date}</p>
                </div>
                <div className="MainVideoDescription__right">
                    <div className="MainVideoDescription__views">
                        <img src={views} alt="Views icon" className="MainVideoDescription__icon"></img>
                        <p className="MainVideoDescription__views--text MainVideoDescription__text">{props.currentVideo.views}</p>
                    </div>
                    <div className="MainVideoDescription__likes">
                        <img src={likes} alt="Likes icon" className="MainVideoDescription__icon"></img>
                        <p className="MainVideoDescription__likes--text MainVideoDescription__text">{props.currentVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className="MainVideoDescription__paragraph">{props.currentVideo.description}</p>
        </div>
    );
}

export default MainVideoDescription;