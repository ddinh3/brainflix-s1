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
        <div className="comments__wrapper">
            <div className="comments__avatar"></div>
            <form id="commentsForm" onSubmit={handleSubmit} className="comments__form">
                <div className="comments__input-container">
                    <label htmlFor="comment" className="comments__subtitle">join the conversation</label>
                    <textarea id="inputComment" className="comments__input comments__input" name="comment"
                        placeholder="Add a new comment" onChange={handleCommentChange}></textarea>
                </div>
                <button type="submit" className="button comments__btn">
                    <img src={commentIcon} alt="comment icon"
                        className='button__icon'></img>
                    <span className="button__text">COMMENT</span>
                </button>
            </form>
        </div>
    );
}

export default CommentsForm;