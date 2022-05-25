import React from 'react';
import './Main.css';

function Main() {
    return (
        <div class="container">
        <div class="header">
            <a class="logo_box" href="/">
                <img alt="logo" src=""/>
                <span>Justgram</span>
            </a>
            <input class="search" placeholder="검색" />
            <div class="menu_box">
                <img 
                    alt="explore" 
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                <img 
                    alt="heart" 
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                <img 
                    alt="mypage" 
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            </div>
        </div>
        <div class="contents">
            <div class="feed_group">
                <div class="feed_container">
                    <div class="feed_header">
                        <a><img alt="profile_image" src=""/>cannon_mj</a>
                        <button><img alt="triple_dot" src="" /></button>
                    </div>
                    <div class="feed_image_box">
                        <img class="feed_image" alt="feed_image" src="" />
                    </div>
                    <div class="feed_contents">
                        <div class="button_group">
                            <span>
                                <button><img /></button>
                                <button><img /></button>
                                <button><img /></button>
                            </span>
                            <span>
                                <button><img /></button>
                            </span>
                            
                        </div>
                        <div class="like_sentence">
                            <a href="#"><img alt="like_profile_image" src="" /></a>
                            <span class="bold">aineworld</span>님 <span class="bold">외 10명</span>이 좋아합니다.
                        </div>
                        <div class="comment_group"></div>
                        <div class="write_comment">
                            <input class="comment_input" />
                            <button class="write_comment_button">게시</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="floating_section">
                <div class="profile_box">
                    <a><img alt="profile_img" src="" /></a>
                    <a>
                        <div></div>
                        <div></div>
                    </a>
                </div>
                <div class="story_box">
                    <div class="story_header">
                        <span>스토리</span>
                        <button>모두보기</button>
                        <div class="sotry_group">
                            <a></a>
                            <a></a>
                            <a></a>
                            <a></a>
                        </div>
                    </div>
                </div>
                <div class="recommend_box">
                    <span>회원님만을 위한 추천</span>
                    <button>모두보기</button>
                    <div class="recommend_group">
                        <div>
                            <a></a>
                            <button>팔로우</button>
                        </div>
                        <div>
                            <a></a>
                            <button>팔로우</button>
                        </div>
                        <div>
                            <a></a>
                            <button>팔로우</button>
                        </div>
                    </div>
                </div>
                <div class="company_info_box">
                    <div><a>Justgram 정보</a><a>지원</a><a>홍보센터</a><a>API</a></div>
                    <div>2019 Justgram</div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Main;