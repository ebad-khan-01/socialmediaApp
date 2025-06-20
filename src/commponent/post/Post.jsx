import React, { useState } from 'react';
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
  
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const user = Users.find((u) => u.id === post.userId);
    const profilePicture = user?.profilePicture ? `${PF}${user.profilePicture}` : `${PF}default-profile.png`;
    const postPhoto = post.photo ? `${PF}${post.photo}` : `${PF}default-post.png`;
    
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src={profilePicture} alt="profile" />
                        <span className="post-username">{user?.username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
    
                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img className="post-img" src={postPhoto} alt="post" />
                </div>
    
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img
                            className="like-icon"
                            src={`${PF}like.png`}
                            alt="like"
                            onClick={likeHandler}
                        />
                        <img
                            className="like-icon"
                            src={`${PF}heart.png`}
                            alt="heart"
                            onClick={likeHandler}
                        />
                        <span className="post-like-count">{like} people liked it</span>
                    </div>
    
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Post;
