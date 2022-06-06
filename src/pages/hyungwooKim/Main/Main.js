import "./Main.scss";
import React, { useEffect, useState } from 'react';


import Nav from "../components/Nav/Nav";
import Feed from "../components/Feed/Feed";
import Aside from "../components/Aside/Aside";
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

function Main() {
    const [feedList, setFeedList] = useState ([]);
    useEffect(() => {
        fetch('http://localhost:3001/data/feedCommentData.json', {
          method: 'GET'
        })             
          .then(res => res.json())
          .then(data => {
            setFeedList(data);
          });
      },[])


    return (
        <div className="mainHW">
            <Nav />
            <div className="layout">
                {feedList.map((feed)=> {
                    return (
                        <Feed 
                        key={feed.feedId}
                        authorImageUrl={feed.author.imageUrl}
                        authorNickname={feed.author.nickname}
                        feedImageUrl={feed.imageUrl}
                        likePeopleImageUrl={feed.likePeople.imageUrl}
                        likePeopleNickname={feed.likePeople.nickname}
                        count={feed.likePeople.count}
                        comment={feed.comments}
                        />    
                    );
                })}
            </div>        
            <div className="mainAside">
                <Aside />   
            </div>
                    
        </div>
    );
  }
  
  export default Main;