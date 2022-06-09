import "./Aside.scss"; 
import React from "react";

function Aside() {

    const StoryVisit = (props) => {
        return (
        <div className="storyProfile">
            <a className="storyUserImg" href="#"><img className="userImg" alt="" src={props.src}/></a>
            <a className="storyUsers">
                <div className="userName">{props.userName}</div><br/>
                <div className="timings">{props.timings}</div>
            </a>
        </div>
        )
      }

    const Boxheader = (props) => {
        return (
        <div className="Box_header">
            <span className="fontGrey">{props.title}</span>
            <button className="buttonStyle">모두보기</button>
        </div>
        )
    }

    const Recommend = (props) => {
        return (
        <div className="recommendProfile">
            <a className="recommendUserImg" href="#"><img className="recommendImg" alt="" src={props.src}/></a>
            <a className="recommendUsers">
                <div className="userName">{props.userName}</div><br/>
                <div className="followers">{props.followers}</div>
            </a>
            <button className="followButton">팔로우</button>
        </div>
        )
      }

return (
    <div className="floating_section">
        <div className="myProfileBox">
            <a href="#"><img alt="profile_img" src="https://whattime.s3.ap-northeast-2.amazonaws.com/profile/1631689784_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-29%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.35.19_thumb.png"/></a>
            <a>
                <div className="profileId">wecode_bootcamp</div>
                <div className="profileDetails">WeCode | 위코드</div>
            </a>
        </div>

        <div className="story_box">
            <Boxheader title="스토리" />
            <div className="storyVisiters">
                <StoryVisit src={"images/hyungwooKim/IMG_5654.JPG"} userName={"skyblue"} timings={"16분 전"}/>
                <StoryVisit src={"images/hyungwooKim/IMG_5654.JPG"} userName={"drink_eat_drink"} timings={"3시간 전"}/>
                <StoryVisit src={"images/hyungwooKim/IMG_5654.JPG"} userName={"hyukyc"} timings={"20시간 전"}/>
                <StoryVisit src={"images/hyungwooKim/IMG_5654.JPG"} userName={"jminkeek"} timings={"어제"}/>
            </div>
        </div>

        <div className="recommend_box">
            <Boxheader title="회원님만을 위한 추천" />
            <div className="recommendGroup">
                <Recommend src={"images/hyungwooKim/IMG_5654.JPG"} userName={"skyblue"} followers={"_legend_a님 외 2명이..."}/>
                <Recommend src={"images/hyungwooKim/IMG_5654.JPG"} userName={"rampart81"} followers={"go.in.seoul님 외 12..."}/>
                <Recommend src={"images/hyungwooKim/IMG_5654.JPG"} userName={"shawnjjoo"} followers={"jimmylee1220님 외 1..."}/>

            </div>
        </div>

        <div className="company_info_box">
            <div> 
                <a>justgram 정보 ・&nbsp;</a><a>지원 ・&nbsp;</a><a>홍보센터 ・&nbsp;</a><a>API ・&nbsp;</a><br/>
                <a>채용 정보 ・&nbsp;</a><a>개인정보처리방침 ・&nbsp;</a><a>약관 ・&nbsp;</a><br/>
                <a>디렉터리 ・&nbsp;</a><a>프로필 ・&nbsp;</a><a>해시태그 ・&nbsp;</a><a>언어 ・&nbsp;</a><br/><br/>
            </div>
            <div><span>Ⓒ 2019 justgram</span></div>
        </div>
    </div>
)
}

export default Aside;
