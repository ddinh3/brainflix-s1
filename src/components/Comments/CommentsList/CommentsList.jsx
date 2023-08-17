import Comment from "../Comments"
import CommentsForm from "../CommentsForm/CommentsForm";


function CommentsList(props) {
    const currentVideo = props.currentVideo; // Extract the currentVideo object
    const comments = currentVideo.comments; // Access comments from currentVideo

    return (
        <div className="comments">
            <h3 className="comments__title">{comments.length} Comments</h3>
            <CommentsForm />
            {comments.map((comment) => {
                let d = new Date(comment.timestamp);
                let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;

                return (
                    <Comment
                        key={comment.id}
                        user={comment.name}
                        comment={comment.comment}
                        date={date}
                    />
                );
            })}
        </div>
    );
}

export default CommentsList;