import React, { useState, useEffect } from 'react';
import Comment from './Feed/Feed';
import './FeedList.scss';

function FeedList() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET' // GET method는 기본값이라서 생략이 가능합니다. 
    })              // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFeedList(data);
      });
  },[])

  return (
    <div className="feedList">
      <h1>Main Page</h1>
      <ul>
        {feedList.map(feed => {
          return (
            <Feed
              key={feed.id}
              profilename={feed.userName}
              feedimg={feed.content}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CommentList;