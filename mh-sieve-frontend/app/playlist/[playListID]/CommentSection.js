import { useState } from 'react';
import './playlist-video.css';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { id: comments.length + 1, text: newComment }]);
            setNewComment('');
        }
    };

    return (
        <div className="container">
            <h2>Comments</h2>
            <div>
                <textarea
                    className="comment-input"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={handleInputChange}
                />
                <button className="comment-button" onClick={handleAddComment}>
                    Comment
                </button>
            </div>
            <div className="comment-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-item">
                        <p className="comment-text">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CommentSection;