import "../MainVideo/MainVideo.scss";

const MainVideo = ({currentVideo}) => {
    return (
        <section className="hero">
            <video poster={currentVideo.image} className="hero__player" controls>
            </video>
        </section>
      );
}
 
export default MainVideo;