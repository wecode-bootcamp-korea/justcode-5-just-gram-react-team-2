// import { Link } from 'react-router-dom';
import "./Main.scss"

function Main() {
    return(
    <div className="mainjs-container">
        <nav className="nav-container">
          <div className="nav-icon-text">
            <div className="icon-insta">
              <img className="icon-logo" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
            </div>
            <div className="text-insta">
              <span>Justgram</span>
            </div>
          </div>
          <div className="input-search">
            <input className="search" placeholder="검색" />
          </div>
          <div className="nav-right">
            <div className="icon-compass-box">
              <span>
                <img className="icon-compass" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="compass image" />
              </span>
            </div>
            <div className="icon-heart-box">
              <span>
                <img className="icon-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart image" />
              </span>
            </div>
            <div className="icon-profile-box">
              <span>
                <img className="icon-profile" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile image" />
              </span>
            </div>
          </div>
        </nav>
        <main className="main-container">
          <div className="feeds">
            <article className="feed">
              <div className="feed-head">
                <header className="feed-profile">
                  <div className="profile-img">
                    <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
                  </div>
                  <div className="profile-text">
                    <div className="profile-name">
                      <span>
                        star._.meanstar
                      </span>
                    </div>
                    <div className="profile-location">
                      <span>
                        서울시
                      </span>
                    </div>
                  </div>
                </header>
                <div className="moreinfo-box">
                  <img className="profile-moreinfo" src="https://cdn-icons-png.flaticon.com/512/17/17764.png?w=1060&t=st=1653564568~exp=1653565168~hmac=627231a76390dd0b0c2252a16c7c17803a7e3dbea86137fefa8bc634f984cac1" />
                </div>
              </div>
              <div className="feed-img">
                <img id="feed-img" src="images/mingyuSeong/justgram-feed.jpg" alt="feed-image" />
              </div>
              <section className="feed-buttons">
                <div className="button-left">
                  <div className="button-heart">
                    <img className="button-heart-img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                  </div>
                  <div className="button-comment">
                    <img className="button-comment-img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                  </div>
                  <div className="button-dm">
                    <img className="button-dm-img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                  </div>
                </div>
                <div className="button-right">
                  <div className="button-bookmark">
                    <img className="button-bookmark-img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                  </div>
                </div>
              </section>
              <section className="feed-heart">
                <span className="profile-name">star._.meanstar</span>님&nbsp;
                <span>외 여러명</span>이 좋아합니다
              </section>
              <div className="feed-text">
                <span className="profile-name">
                  star._.meanstar
                </span>
                <span>
                  &nbsp;안녕하세요. 첫 피드입니다.
                </span>
                <span>
                  ... 더보기
                </span>
              </div>
              <div className="feed-uploaded">
                <time>1일 전</time>
              </div>
              <div className="feed-comment-box">
                <div>
                  <span>
                  </span>
                </div>
              </div>
              <section className="feed-comment-input">
                <input className="comment-input" placeholder="댓글 달기..."></input>
                <button className="comment-button">
                  게시
                </button>
              </section>
            </article>
          </div>
          <div className="main-right">
            <div className="main-right-profile">
              <div className="profile-img">
                <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
              </div>
              <div className="profile-text">
                <div className="profile-name">
                  <span className="profile-name">
                    star._.meanstar
                  </span>
                </div>
                <div className="profile-nickname">
                  민규
                </div>
              </div>
            </div>
            <div className="main-right-story">
              <div className="story-header">
                <div>
                  스토리
                </div>
                <div>
                  <span>
                    모두 보기
                  </span>
                </div>
              </div>
              <div className="story-contents">
                <div className="story-content">
                  <div className="profile-img">
                    <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
                  </div>
                  <div className="profile-text">
                    <div className="profile-name">
                      <span className="profile-name">
                        star._.meanstar
                      </span>
                    </div>
                    <div className="upload-time">
                      <time>
                        19시간 전
                      </time>
                    </div>
                  </div>
                </div>
                <div className="story-content">
                  <div className="profile-img">
                    <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
                  </div>
                  <div className="profile-text">
                    <div className="profile-name">
                      <span className="profile-name">
                        star._.meanstar
                      </span>
                    </div>
                    <div className="upload-time">
                      <time>
                        3시간 전
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right-recommend">
              <div className="recommend-header">
                <div>
                  회원님을 위한 추천
                </div>
                <div>
                  <span>
                    모두 보기
                  </span>
                </div>
              </div>
              <div className="recommend-contents">
                <div className="recommend-content">
                  <div className="recommend-profile">
                    <div className="profile-img">
                      <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
                    </div>
                    <div className="profile-text">
                      <div className="profile-name">
                        <span className="profile-name">
                          star._.meanstar
                        </span>
                      </div>
                      <div className="common-follow">
                        <span>
                          king님 외 2명이 팔로우합니다.
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="follow-button">
                    팔로우
                  </button>
                </div>
                <div className="recommend-content">
                  <div className="recommend-profile">
                    <div className="profile-img">
                      <img id="profile-img" src="images/mingyuSeong/profile.jpg" alt="profile-image" />
                    </div>
                    <div className="profile-text">
                      <div className="profile-name">
                        <span className="profile-name">
                          star._.meanstar
                        </span>
                      </div>
                      <div className="common-follow">
                        <span>
                          king님 외 2명이 팔로우합니다.
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="follow-button">
                    팔로우
                  </button>
                </div>
              </div>
            </div>
            <div className="main-right-info">
              <div className="information">
                <div>
                  <span>
                    Justgram 정보
                  </span>
                  <span>
                    지원
                  </span>
                  <span>
                    홍보 센터
                  </span>
                  <span>
                    API
                  </span>
                  <span>
                    채용 정보
                  </span>
                  <span>
                    개인정보처리방침
                  </span>
                  <span>
                    약관
                  </span>
                  <span>
                    디렉터리
                  </span>
                  <span>
                    프로필
                  </span>
                  <span>
                    해시태그
                  </span>
                  <span>
                    언어
                  </span>
                </div>
                <div className="footer-text">
                  © 2022 JUSTGRAM FROM JUSTCODE
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Main;