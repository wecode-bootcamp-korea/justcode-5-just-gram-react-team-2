import "./Comment.scss";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faHeart);

function Comment(props) {

    return (
    <div className="comment_group">
        <div className="commentEach">
            <a className="userName">{props.author}</a>
            <span className="userComment">{props.comment}</span>
        </div>
        <div className="commentBtnGroup">
            <FontAwesomeIcon
              icon="fa-regular fa-heart"
            />
            <FontAwesomeIcon
              icon="fa-regular fa-trash-can"
            />
        </div>
    </div>
  );
}

export default Comment;
