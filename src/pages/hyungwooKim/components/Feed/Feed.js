import "./Feed.scss";
import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faHeart,
    faComment,
    faShareFromSquare,
    faBookmark,
    faCircleUser,
    faGear,
    faMagnifyingGlass,
    faEllipsis, 
  } from '@fortawesome/free-solid-svg-icons';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';

  
  library.add(
    faHeart,
    faComment,
    faShareFromSquare,
    faBookmark,
    faCircleUser,
    faGear,
    faMagnifyingGlass,
    faInstagram,
    faEllipsis,
  );


function Feed(props) {
    const [commentList, setCommentList] = useState(props.comment);

    const [comment, setComment] = useState('');
    const commentInput = event => setComment(event.target.value);

    const [commentArray, setCommentArray] = useState([]);
    
    const registComment = event => { 
        event.preventDefault();
        if (comment === ''){
            return
        } // 내용없이 코멘트가 등록되는 것을 방지
        setCommentArray(commentValueList => [...commentValueList, comment]);
        setComment('')
    }
  
    const commentValid = comment.length >= 1;

    return (
        <div className="feed_group">
            <div className="feed_container">
                <div className="feed_header">
                    <div className="profile_feed">
                        <span><img alt="profile_img" src={props.authorImageUrl}/></span>
                        <a className="profile_name">{props.authorNickname}</a>
                    </div>
                    <a className="triple_dots"><FontAwesomeIcon icon="fa-solid fa-ellipsis" /></a>
                </div>
                <div className="feed_image">
                    <img alt="feed_image" src={props.feedImageUrl}/>
                </div>                        
                <div className="feed_contents">
                    <div className="button_group">
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-heart"/>
                            <FontAwesomeIcon icon="fa-solid fa-comment" />
                            <FontAwesomeIcon icon="fa-solid fa-share-from-square"/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-bookmark" color="gray" />
                        </div>
                    </div>
                    <div className="like_sentence">
                        <img alt="like_sentence_profile" src={props.likePeopleImageUrl}/>
                        <a className="bold">{props.likePeopleNickname}</a><span>님</span> <span className="bold">&nbsp;외 {props.count}명</span><span>이 좋아합니다. </span>
                        </div>
                </div>
            </div>
            <div>   
                {commentList.map((commentEach) => {
                    return (
                        <Comment
                        key={commentEach.id}
                        author={commentEach.author}
                        comment={commentEach.content}
                        isLiked={commentEach.isLiked}
                    />
                    );
                })}
            </div>     
            <ul className="newCommentList">
            {commentArray.map((value, index) => (
            <li key={index}>
                <span>bandicorgi</span>
                        <span>{value}</span>
                        <button>x</button>
                    </li>
            ))}
            </ul>
            <div className="timing"><span>42분 전</span></div>
            <div className="writeNewComment">
                <input 
                    className="commentInput" 
                    placeholder="댓글 달기..."
                    type="text"
                    value={comment}
                    onChange= {commentInput}/>
                <button 
                    onClick={registComment} 
                    className={commentValid ? "buttonEnabled" : "buttonDisabled"}>게시</button>
            </div>
        </div>
    )
}

export default Feed;
