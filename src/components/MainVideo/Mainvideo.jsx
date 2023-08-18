import "../MainVideo/MainVideo.scss";

const MainVideo = (props) => {
    return (
        <section className="hero">
            <video poster={props.currentVideo.image} className="hero__player" controls>
            </video>
        </section>
      );
}
 
export default MainVideo;