import React from 'react';

const Posts = ({posts}) => (
    <div className="posts">
        {posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <footer>
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