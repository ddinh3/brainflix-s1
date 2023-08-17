import "./Comments.scss"

function Comment(props) {
    return (
        <div className="Comment">
            <div className="Comment__left">
                <div className="Comment__profile"></div>
            </div>

            <div className="Comment__container">
                <div className="Comment__header">
                    <p className="Comment__name">{props.user}</p>
                    <p className="Comment__date">{props.date}</p>
                </div>
                
                
                <p className="Comment__text">{props.comment}</p>
            </div>
        </div>
    );
}

export default Comment;