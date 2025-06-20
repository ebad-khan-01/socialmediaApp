import React from 'react';
import "../feed/feed.css";
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from "../../dummyData";

function Feed(){
  return (
    <div className='feed'>
    <div className="feed-wrapper">

      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
    </div>
  );
}

export default Feed;
