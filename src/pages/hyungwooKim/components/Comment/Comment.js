import "./Comment.scss";
import CommentList from "./CommentList";
import React, { useState } from "react";

function Comment(props) {

    const [comment, setComment] = useState('');
    const commentInput = event => setComment(event.target.value);

    const [commentArray, setCommentArray] = useState([]);
    const registComment = event => { 
    event.preventDefault();
    if (comment === ''){
        return
    } 
    setCommentArray(commentValueList => [...commentValueList, comment]);
    setComment('')}
  
    const commentValid = comment.length >= 1;
  
    
    return (
    <div>
        <div className="comment_group">
            <div className="comment1">
                <a className="userName">canon_mj</a>
                <span className="userComment">반가워...</span>
                <a className="more">더 보기</a>
            </div>
            <div className="comment1">
                <a className="userName">neceosecius</a>
                <span className="userComment">안녕 반디~~~~</span>
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
        <div>{props.key} {props.name} {props.comment}</div>

    </div>

    </div>
  );
}

export default Comment;
