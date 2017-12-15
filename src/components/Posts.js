import React from 'react';
import { Link } from 'react-router-dom';
import ControlsBar from './ControlsBar'

const Posts = ({posts}) => (
    <div className="posts">
        <ControlsBar />
        {posts.map(post => (
          <article key={post.id} className="card mt-3">
            <h3 className="card-header">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <footer className="card-footer">
              <span>{post.voteScore} votes</span>
              <span> | by {post.author}</span>
              <span> | {post.commentCount} comments</span>
              <span> | created {new Date(post.timestamp).toLocaleDateString('en-US')}</span>
            </footer>            
          </article>
        ))}
    </div>
);

export default Posts;