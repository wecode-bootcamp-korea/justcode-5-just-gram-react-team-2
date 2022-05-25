import "./Main.scss"
import { Link } from "react-router-dom";


function Main() {
    return (
        <div className="container"> 
            <div className="header">
                <div className="logo_box">
                    <a>
                        <i className="fa-brands fa-instagram"></i>
                        <Link to="/" className ="justgram_logo">justgram</Link>
                    </a>
                </div>
                <input className="search" placeholder="검색"/>
                <div className="menu_box">
                    <img alt="explore" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                    <img alt="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                    <img alt="mypage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                </div>
            </div>
            <div className="contents">
                        <div className="feed_group">
                    <div className="feed_container">
                        <div className="feed_header">
                            <div className="profile_feed">
                                <span><img alt="profile_img" src="https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370"/></span>
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
                                    <i className="fa-solid fa-heart"></i>
                                    <i className="fa-regular fa-comment"></i>
                                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </div>
                                <div>
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="like_sentence">
                                <img alt="like_sentence_profile" src="https://images.unsplash.com/photo-1589779137147-3d388746b765?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"/>
                                <a className="bold">aineworld</a><span>님</span> <span className="bold">&nbsp;외 758명</span><span>이 좋아합니다. </span>
                            </div>

                            <div className="comment_group">
                                <div className="comment1">
                                    <a>canon_mj </a>
                                    <span>귀여워...  </span>
                                    <a className="profile_name_kor">더 보기</a>
                                </div>
                                <div className="comment1">
                                    <a>neceosecius </a>
                                    <span>반디다!~~~</span>
                                </div>                                
                            </div>
                            <div className="timing"><span>42분 전</span></div>
                                <div className="write_comment">
                                    <input className="comment_input" placeholder="댓글 달기..."/>
                                    <button className="write_comment_button">게시</button>
                                </div>
                        </div>
                    </div>
                </div>
                
                <div className="floating_section">
                    <div className="profile_box">
                        <a href="#"><img alt="profile_img" src="https://whattime.s3.ap-northeast-2.amazonaws.com/profile/1631689784_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-29%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.35.19_thumb.png"/></a>
                        <a>
                            <div className="bold">wecode_bootcamp</div>
                            <div className="profile_name_kor">WeCode | 위코드</div>
                        </a>
                    </div>
                    <div className="story_box">
                        <div className="story_header">
                            <span className="profile_name_kor">스토리</span>
                            <button>모두보기</button>
                        </div>
                        <div className="story_group">
                            <div className="story_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"/></a>
                                <a>
                                    <div className="bold">_yum_s</div>
                                    <div className="profile_name_kor">16분 전</div>
                                </a>
                            </div>
                            <div className="story_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831"/></a>
                                <a>
                                    <div className="bold">drink_eat_drink</div>
                                    <div className="profile_name_kor">3시간 전</div>
                                </a>
                            </div>
                            <div className="story_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985"/></a>
                                <a>
                                    <div className="bold">hyukyc</div>
                                    <div className="profile_name_kor">20시간 전</div>
                                </a>
                            </div>
                            <div className="story_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148"/></a>
                                <a>
                                    <div className="bold">jminkeek</div>
                                    <div className="profile_name_kor">어제</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="recommend_box">
                        <div className="recommend_header">
                            <span className="profile_name_kor">회원님만을 위한 추천</span>
                            <button>모두보기</button>
                        </div>
                        <div className="recommend_group">
                            <div className="recommended_profile">
                                <a><img alt="profile_story_img" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"/></a>
                                <a>
                                    <div className="bold">joaaaaaahye</div>
                                    <div className="profile_name_kor">_legend_a님 외 2명이...</div>
                                </a>
                                <button>팔로우</button>
                            </div>
                            <div className="recommended_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"/></a>
                                <a>
                                    <div className="bold">rampart81</div>
                                    <div className="profile_name_kor">ringo.in.seoul님 외 12...</div>
                                </a>
                                <button>팔로우</button>
                            </div>
                            <div className="recommended_profile">
                                <a href="#"><img alt="profile_story_img" src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364"/></a>
                                <a>
                                    <div className="bold">shawnjjoo</div>
                                    <div className="profile_name_kor">jimmylee1220님 외 1...</div>
                                </a>
                                <button>팔로우</button>
                            </div>
                        </div>
                    </div>
                    <div className="company_info_box">
                        <div> 
                            <a>justgram 정보 ・&nbsp;</a><a>지원 ・&nbsp;</a><a>홍보센터 ・&nbsp;</a><a>API ・&nbsp;</a>
                            <a>채용 정보 ・&nbsp;</a><a>개인정보처리방침 ・&nbsp;</a><a>약관 ・&nbsp;</a>
                            <a>디렉터리 ・&nbsp;</a><a>프로필 ・&nbsp;</a><a>해시태그 ・&nbsp;</a><a>언어 ・&nbsp;</a>
                        </div>
                        <div><span>Ⓒ 2019 justgram</span></div>
                    </div>

                </div>
            </div>
        </div>

    );
  }
  
  export default Main;