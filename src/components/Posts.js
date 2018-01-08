import React from 'react';
import { Link } from 'react-router-dom';
import ControlsBar from './ControlsBar';
import Post from './Post';

const Posts = ({posts}) => (
    <div className="posts">
        <ControlsBar />
        {posts.map(post => (
          <Post key={post.id} post={post} listView={true} />
        ))}
    </div>
);

export default Posts;
