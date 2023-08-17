import "./CommentsForm.scss"
import commentIcon from "../../../assets/Icons/add_comment.svg"

function CommentsForm() {
    return (
        <div className="Comments__container">
            <div className="Comments__profile"></div>

            <form action="submit" id="CommentsForm" className="Comments__form">
                <div className="Comments__inputer-container">
                    <label htmlFor="Comment" className="Comments__subtitle">JOIN THE CONVERSATION</label>
                    <textarea id="inputComment" className="Comments__input" name="Comment"
                        placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="Comments__button">
                    <img src={commentIcon} alt="Comment icon" className="Button__icon" />
                    <span className="Button--text">COMMENT</span>
                </button>
            </form>
        </div>
    );
}

export default CommentsForm;