import './Main.scss';
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="container">
        <div className="header">
            <div className="logo_box">
                <Link to="/main">
                    <i className="fa-brands fa-instagram"></i>
                    <span classNmae="txt">Justgram</span>
                </Link>
            </div>
            <input className="search" placeholder="검색" />
            <div className="menu_box">
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
        <div className="contents">
            <div className="feed_group">
                <div className="feed_container">
                    <div className="feed_header">
                        <div className="profile_feed">
                        <span><img id="profile_image" alt="profile_image" src="images/taejunJang/profile-img.jpg"/></span>
                        <a className="profile_name">jangtaejun</a>
                        </div>
                        <button type="button" className="triple_dots">
                        <i className="fa-solid fa-ellipsis"></i>
                        </button>
                    </div>
                    <div className="feed_image">
                        <img id="feed_image" alt="feed_image" src="images/taejunJang/feed-img.jpg" />
                    </div>
                    <div className="feed_contents">
                        <div className="button_group">
                            <div className="">
                                <button type="button" className="btn">
                                <i className="fa-solid fa-heart"></i>
                                </button>
                                <button type="button">
                                <i className="fa-regular fa-comment"></i>
                                </button>
                                <button type="button">  
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </button>
                            </div>
                            <button type="button"><i className="fa-regular fa-bookmark"></i></button>
                        </div>
                        <div class="like_sentence">
                            <img alt="like_profile_image" src="https://images.unsplash.com/photo-1653427603282-a2f350ba07f5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926" />
                            <span className="bold">aineworld</span>님&nbsp;<span className="bold">외 10명</span>이 좋아합니다.
                        </div>

                        <div class="comment_group">
                            <div className="com1">
                                <p className="profile_name">canon_mj</p>
                                <p className="desc">위워크에서 진행한 베이킹 클래스...</p>
                                <button type="button" className="more_see">더 보기</button>
                            </div>
                        <div className="write_comment">
                            <input class="comment_input" />
                            <button class="write_comment_button">게시</button>
                            <a className="comment_info">더 보기</a>
                        </div>
                        <div className="comment1">
                            <a>neceosecius</a>
                            <span>거봐 좋았잖아~~~~</span>
                        </div>
                        </div>
                        <div className="time"><span>42분전</span></div>
                            <div className="write_comment">
                                <input className="comment_input" placeholder="댓글 달기..."/>
                                <button className="comment_button">게시</button>
                            </div>
                    </div>        
                </div>
            </div>

            <div class="floating_section">
                <div class="profile_box">
                    <a><img alt="profile_img" src="" /></a>
                    <a>
                        <div className="bold">wecode_bootcamp</div>
                        <div className="profile_name_kor">WeCode | 위코드</div>
                    </a>
                </div>
                <div class="story_box">
                    <div class="story_header">
                        <span className="profile_story">스토리</span>
                        <button>모두보기</button>
                    </div>
                        <div className="sotry_group">
                            <div className="story_profile">
                            <a href="#"><img alt=""/></a>
                            <a href="#"><img alt=""/></a>
                            <a href="#"><img alt=""/></a>
                            <a href="#"><img alt=""/></a>
                            </div>
                        </div>
                </div>
                <div class="recommend_box">
                    <span className="profile_recommend">회원님만을 위한 추천</span>
                    <button>모두보기</button>
                    <div className="recommend_group">
                        <div className="recommend1">
                            <a></a>
                            <button>팔로우</button>
                        </div>
                        <div className="recommend2">
                            <a></a>
                            <button>팔로우</button>
                        </div>
                        <div className="recommend3">
                            <a></a>
                            <button type="button" className="btn_follow">팔로우</button>
                        </div>
                    </div>
                </div>
                <div className="company_info_box">
                    <div className="info_contents">
                        <Link to="#" onClick={e =>e.preventDefault()}>Justgram 정보 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>지원 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>홍보센터 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault}>API ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>채용 정보 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>개인정보처리방침 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>약관 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>디렉터리 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>프로필 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>해시태그 ・&nbsp;</Link>
                        <Link to="#" onClick={e =>e.preventDefault()}>언어 ・&nbsp;</Link>
                    </div>
                    <div><span>© 2019 Justgram</span></div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Main;