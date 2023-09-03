import "./CommentsForm.scss"
import commentIcon from "../../../assets/Icons/add_comment.svg"
import { useState } from "react";
import axios from "axios";

function CommentsForm({ currentVideo, API_URL, API_Key, setComments }) {

    const user = "Mohan Muruge"
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const isFormValid = () => {
        if (!comment) {
            return false;
        }

        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

        if (isFormValid()) {
            let commentObject = {
                name: user,
                comment: comment
            }

            let videoId = currentVideo.id;

            axios.post(`${API_URL}/videos/${videoId}/comments${API_Key}`, commentObject)
                .then(response => {
                    console.log(response)
                    return axios.get(`${API_URL}/videos/${videoId}${API_Key}`)
                })
                .then(response => {
                    setComments(response.data.comments)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            console.log("Error submitting the comment")
        }
    }


    return (
        <div className="Comments__container">
            <div className="Comments__profile"></div>
            <form id="CommentsForm" onSubmit={handleSubmit} className="Comments__form">
                <div className="Comments__input-container">
                    <label htmlFor="Comment" className="Comments__subtitle">join the conversation</label>
                    <textarea id="inputComment" className="Comments__input" name="comment"
                        placeholder="Add a new comment" onChange={handleCommentChange}></textarea>
                </div>
                <button type="submit" className="Comments__button">
                    <img src={commentIcon} alt="Comment icon"
                        className='Button__icon'></img>
                    <span className="Button__text">COMMENT</span>
                </button>
            </form>
        </div>
    );
}

export default CommentsForm;