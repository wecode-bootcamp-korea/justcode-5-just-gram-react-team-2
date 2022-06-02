import "./Main.scss";
import React from "react";

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
import CommentList from "../components/Comment/CommentList";

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
    return (
        <div>
            <Nav />
            <div className="layout">
                    <Feed />    
                    <Aside />
                    <CommentList />
            </div>        
        </div>
    );
  }
  
  export default Main;