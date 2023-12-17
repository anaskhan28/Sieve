import React from 'react';
import './playlist-video.css';

const Comments = () => {
  const comments = [
    {
      id: 1,
      user: 'Deep Jogi',
      text: 'Great content! Really enjoyed it.',
      timestamp: '1 hours ago',
    },
    {
      id: 2,
      user: 'Radha sharma',
      text: 'Awesome video! Keep up the good work.',
      timestamp: '1 hours ago',
    },
    {
      id: 3,
      user: 'Mohini singh',
      text: 'This is very informative. Thanks for sharing!',
      timestamp: '5 hours ago',
    },
    {
      id: 4,
      user: 'Nikhil',
      text: 'I have a question about this topic. Can you elaborate more?',
      timestamp: '6 hours ago',
    },
    {
      id: 5,
      user: 'Charlie Brown',
      text: 'Love your content! Looking forward to more videos.',
      timestamp: '12 hours ago',
    },
  ];

  return (
    <div>
      <h3>User Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <strong>{comment.user}</strong>
          <p>{comment.text}</p>
          <small>{comment.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default Comments;
