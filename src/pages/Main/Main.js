import React, { useReducer, useState } from "react";
import "./Main.scss";
import Students from "./Students";
import { link } from "react-router-dom";
import TodoBoard from "./TodoBoard";
import "bootstrap/dist/css/bootstrap.min.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};
const index = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  // const addItem = () => {
  //   console.log("im hererer!", inputValue);
  //   setTodoList([...todoList, inputValue]);
  // };

  return (
    <>
      <div className="nav-container">
        <div className="nav-1">
          <p className="logo_instagram_txt font">justgram</p>
        </div>
        <img src="/img/logo.jpg" />
        <input
          id="input"
          type="text"
          className="input-search"
          placeholder="검색"
        />
        {/* <p style="font-size:15px">Re:</p> */}
        <div className="line">
          {/* <span style="font-size:10px" id="result1"></span> */}
        </div>
        <div class="nav-2">
          <img src="./img/home.jpg" />
          <img src="./img/dm.jpg" />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img class="pic" src="./img/my.jpg" />
        </div>
      </div>

      <div className="feeds">
        <article>
          <header>
            <div className="profile-of-article">
              <img className="img-profile pic" src="./img/my1.jpg" />
              <span className="userID main-id point-span">seo_hsss</span>
            </div>
            <img class="icon-react icon-more" src="./img/dot.jpg" alt="more" />
          </header>
          <div className="main-image">
            <img src="./img/seo1.jpg" class="mainPic" />
          </div>
          <div className="icons-react">
            <div className="icons-left">
              <img
                className="icon-react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
              <img
                className="icon-react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
              />
              <img className="icon-react" src="./img/dm1.jpg" />
            </div>
            <img
              className=" icon-react"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
            <img className="icon-react" src="./img/dm1.jpg" />
          </div>
          <img
            className=" icon-react"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
          />
          <div className="reaction" />
          <div className="liked-people">
            <img className="pic" src="./img/profil.jpg" />
            <p>
              <span className="point-span">johnnyjsuh</span>님{" "}
              <span className="point-span">외 2,412,751명</span>이 좋아합니다
            </p>
          </div>
          <div className="description">
            <p>
              <span className="point-span userID">dlwlrma</span>
              <span className="at-tag">@wkorea @gucci</span> 🌱
            </p>
          </div>
          <div className="comment-section">
            <ul className="comments">
              <li>
                <span>
                  <span class="point-span userID">postmalone</span>내가 입으면
                  더 잘어울릴 것 같아
                </span>
                <img
                  className="comment-heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="하트"
                />
              </li>
            </ul>
            <div className="time-log">
              <span>32분 전</span>
              {studentsInfo.students.map((student) => {
                return (
                  <Students
                    key={student.id}
                    name={student.name}
                    dispatch={dispatch}
                    id={student.id}
                    isHere={student.isHere}
                  />
                );
              })}
              {/* <TodoBoard todoList={todoList} /> */}
            </div>
            <p id="result"></p>
          </div>
          <div className="hl"></div>
          <div className="comment"></div>
          <div>
            <input
              id="comment"
              className="input-comment"
              type="text"
              value={name}
              placeholder="댓글 달기..."
              // onChange={(event) => setInputValue(event.target.value)}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              id="bt"
              className="submit-comment"
              onClick={() => {
                dispatch({ type: "add-student", payload: { name } });
              }}
            >
              게시
            </button>
            {/* {studentsInfo.students.map((student) => {
              return (
                <Students
                  key={student.id}
                  name={student.name}
                  dispatch={dispatch}
                  id={student.id}
                  isHere={student.isHere}
                />
              );
            })} */}
          </div>
        </article>
      </div>
      <div className="main-right">
        <div className="myProfile">
          <img className="pic" src="./img/my1.jpg" />
          <div>
            <span className="userID point-span">yugwanhyi2546</span>
            <span className="sub-span">KWANEE </span>
          </div>
        </div>
      </div>

      <div className="section-story">
        <div className="menu-title">
          <span className="sub-title">스토리</span>
          <span className="find-more">모두 보기</span>
        </div>
      </div>
      <ul className="story-list">
        <li>
          <div className="gradient-wrap1">
            <img className="story" src="./img/story.jpg" />
          </div>
        </li>
      </ul>
      <div className="section-recommend">
        <div className="menu-title">
          <span className="sub-title">회원님을 위한 추천</span>
          <span className="find-more">모두 보기</span>
        </div>
        <ul className="recommend-list">
          <li>
            <div className="recommend-friend-profile">
              <img src="./img/member.jpg" />
            </div>
          </li>
        </ul>
      </div>
      <footer>
        <p className="insta-sccript">
          소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 약관 ∙
          위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
        </p>
        <p p className="insta-sccript">
          © 2020 INSTAGRAM FROM FACEBOOK
        </p>
      </footer>
    </>
  );
};

export default index;
