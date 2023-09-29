import "./NextVideoList.scss"
import NextVideo from "../NextVideo";

function NextList({videoList}) {
    return (
        <section className="next__list">
            <p className="next__list-title">NEXT VIDEOS</p>
            {videoList.map((video) => {
    return <NextVideo key={video.id} id={video.id} image={video.image} title={video.title} channel={video.channel} />
})}
        </section>
    );
}

export default NextList;