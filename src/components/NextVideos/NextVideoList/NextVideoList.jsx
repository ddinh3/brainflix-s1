import "./NextVideoList.scss"
import NextVideo from "../NextVideo";

function NextList(props) {
    return (
        <section className="next__list">
            <p className="next__list-title">NEXT VIDEOS</p>
            {props.videoList.map((video) => {
                return <NextVideo key={video.id} url={video.image} title={video.title} author={video.channel} handleVideoClick={props.handleVideoClick} />
            })}
        </section>
    );
}

export default NextList;