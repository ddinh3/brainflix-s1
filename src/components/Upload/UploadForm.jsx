import './UploadForm.scss'
import thumbnail from '../../assets/Images/Mohan-muruge.jpg';
import publishIcon  from '../../assets/Icons/publish.svg';

function UploadForm ()  {
    return ( 
        <form action="submit" className="upload__form">
        <div className="upload__wrapper">
        <div className="upload__thumbnail">
        <p className="upload__subtitle">video thumbnail</p>
        <div className="upload__img-container">
        <img src={thumbnail} alt="bike" className="upload__img"/>
        </div>
        </div>
        <div className="upload__inputs">
            <label htmlFor="title" className="upload__label">Title your video</label>
            <input type="text" className="upload__input" placeholder="Add a title to your video"/>
            <label htmlFor="description" className="upload__label">Add a video description</label>
            <textarea className="upload__input upload__input-big" placeholder="Add a description to your video" />
        </div>
        </div>
        <div className="upload__buttons">
                <button className="upload__btn button">
                    <img src={publishIcon} alt="upload icon" className="button__icon" />
                    <span className="button__text">PUBLISH</span>
                </button>
                <p className="upload__cancel">CANCEL</p>
            </div>

        </form>
     );
}
 
export default UploadForm ;