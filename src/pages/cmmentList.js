import React, { useState, useEffect } from "react";
// import Comment from "./Comment/Comment";
// import "./CommentList.scss";

function CommentList() {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("http://http://localhost:5000/products", {
      method: "GET", // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCommentList(data);
      });
  }, []);

  return (
    <div className="commentList">
      <h1>Main Page</h1>
      <ul>
        {commentList.map((comment) => {
          return (
            <Comment
              image={comment.img}
              id={comment.id}
              name={comment.name}
              comment={comment.ripple}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;
