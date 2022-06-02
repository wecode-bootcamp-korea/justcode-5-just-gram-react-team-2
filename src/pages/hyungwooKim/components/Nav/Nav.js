import "./Nav.scss";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {
    return (
        <div className="Nav">
            <div className="logo_box">
                    <FontAwesomeIcon className="justgramLogo" icon="fa-brands fa-instagram" />
                    <span className ="justgram">justgram</span>
            </div>
            <input className="search" placeholder="검색"/>
            <div className="menu_box">
                <img alt="explore" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                <img alt="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                <img alt="mypage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
            </div>
        </div>
    );
}

export default Nav;
