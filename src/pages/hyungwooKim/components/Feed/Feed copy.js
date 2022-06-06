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
    );


function Feed(props) {
    const [commentList, setCommentList] = useState([]);
    const [feedCommentdata, setFeedCommentdata] = useState({});

    useEffect(() => {
      fetch('http://localhost:3001/data/feedCommentData.json', {
        method: 'GET' // GET method는 기본값이라서 생략이 가능합니다. 
      })              // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFeedCommentdata(data);
        });
    },[])
  
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
                        <span><img alt="profile_img" src="images/hyungwooKim/IMG_4756.JPG"/></span>
                        <a className="profile_name">canon_mj</a>
                    </div>
                    <a className="triple_dots"><i className="fa-solid fa-ellipsis"></i></a>
                </div>
                <div className="feed_image">
                    <img alt="feed_image" src="images/hyungwooKim/IMG_5654.JPG"/>
                </div>                        
                <div className="feed_contents">
                    <div className="button_group">
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-heart"/>
                            <FontAwesomeIcon icon="fa-regular fa-comment"/>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"/>
                        </div>
                        <div>
                        <FontAwesomeIcon icon="fa-regular fa-bookmark"/>
                        </div>
                    </div>
                    <div className="like_sentence">
                        <img alt="like_sentence_profile" src="https://images.unsplash.com/photo-1589779137147-3d388746b765?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"/>
                        <a className="bold">aineworld</a><span>님</span> <span className="bold">&nbsp;외 758명</span><span>이 좋아합니다. </span>
                        </div>
                </div>
            </div>
            <Comment userName = "hello" userComment="ddddd"/>
            <ul>
                {feedCommentdata.map((commentEach) => {
                    return (
                        <li><Comment
                        key={commentEach[0].comments.id}
                        author={commentEach[0].comments.author}
                        comment={commentEach[0].comments.content}
                    /></li>
                    );
                })}
            </ul>
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
