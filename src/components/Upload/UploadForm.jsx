function UploadForm  = () => {
    return ( 
        <form action="submit" className="upload__form">
        <div className="upload__wrapper">
        <div className="upload__thumbnail">
        <p className="upload__subtitle">video thumbnail</p>
        <div className="upload__img-container">
        <img src={thumbnail} alt="bike" className="upload__img"/>
        </div>
        </div>

        </div>
        </form>
     );
}
 
export default UploadForm ;