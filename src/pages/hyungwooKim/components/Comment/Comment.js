import "./Comment.scss";
import React, { useState } from "react";

import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHeart, faTrashCan);

function Comment(props) {
    const likeStatus = props.isLiked;
    const [isLiked, setIsLiked] = useState(likeStatus);
    const likedBtn = () => {
        setIsLiked(!isLiked)
    }
    
    return (
    <div className="comment_group">
        <div className="commentEach">
            <a className="userName">{props.author}</a>
            <span className="userComment">{props.comment}</span>
        </div>
        <div className="commentBtnGroup">

            <FontAwesomeIcon
              icon="fa-solid fa-heart"
              className={isLiked ? "redHeart" : "grayHeart"}
              onClick={likedBtn}
            />
            <FontAwesomeIcon 
              icon="fa-solid fa-trash-can" 
              />
        </div>
    </div>
  );
}

export default Comment;
