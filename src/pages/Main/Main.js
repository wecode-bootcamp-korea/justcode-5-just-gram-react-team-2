import React, { useReducer, useState } from "react";
import styles from "./Main.module.scss";
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
      <div className={styles.wrap}>
        <div className={styles.nav_container}>
          <div className={styles.nav_1}>
            <p className={`${styles.logo_instagram_txt} ${styles.font}`}>
              justgram
            </p>
          </div>
          <img src="/img/logo.jpg" />
          <input
            id="input"
            type="text"
            className="input_search"
            placeholder="검색"
          />
          {/* <p style="font-size:15px">Re:</p> */}
          <div className={styles.line}>
            {/* <span style="font-size:10px" id="result1"></span> */}
          </div>
          <div class={styles.nav_2}>
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
            <img class={styles.pic} src="./img/my.jpg" />
          </div>
        </div>

        <div className={styles.feeds}>
          <article>
            <header>
              <div className={styles.profile_of_article}>
                <img
                  className={`${styles.img_profile} ${styles.pic}`}
                  src="./img/my1.jpg"
                />
                <span
                  className={`${styles.userID} ${styles.main_id} ${styles.point_span}`}
                >
                  seo_hsss
                </span>
              </div>
              <img
                class={`${styles.icon_react} ${styles.icon_more}`}
                src="./img/dot.jpg"
                alt="more"
              />
            </header>
            <div className={styles.main_image}>
              <img src="./img/seo1.jpg" class={styles.mainPic} />
            </div>
            <div className={styles.icons_react}>
              <div className={styles.icons_left}>
                <img
                  className={styles.icon_react}
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
                <img
                  className={styles.icon_react}
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                />
                <img className={styles.icon_react} src="./img/dm1.jpg" />
              </div>
              <img
                className={styles.icon_react}
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              />
              <img className={styles.icon_react} src="./img/dm1.jpg" />
            </div>
            <img
              className={styles.icon_react}
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
            <div className={styles.reaction} />
            <div className={styles.liked_people}>
              <img className={styles.pic} src="./img/profil.jpg" />
              <p>
                <span className={styles.point_span}>johnnyjsuh</span>님{" "}
                <span className={styles.point_span}>외 2,412,751명</span>이
                좋아합니다
              </p>
            </div>
            <div className={styles.description}>
              <p>
                <span className={`${styles.point_span} ${styles.suserID}`}>
                  dlwlrma
                </span>
                <span className={styles.at_tag}>@wkorea @gucci</span> 🌱
              </p>
            </div>
            <div className={styles.comment_section}>
              <ul className={styles.comments}>
                <li>
                  <span>
                    <span className={`${styles.point_span} ${styles.userID}`}>
                      postmalone
                    </span>
                    내가 입으면 더 잘어울릴 것 같아
                  </span>
                  <img
                    className={styles.comment_heart}
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt="하트"
                  />
                </li>
              </ul>
              <div className={styles.time_log}>
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
            <div className={styles.hl}></div>
            <div className={styles.comment}></div>
            <div>
              <input
                id="comment"
                className={styles.input_comment}
                type="text"
                value={name}
                placeholder="댓글 달기..."
                // onChange={(event) => setInputValue(event.target.value)}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                id="bt"
                className={styles.submit_comment}
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
        <div className={styles.main_right}>
          <div className={styles.myProfile}>
            <img className={styles.pic} src="./img/my1.jpg" />
            <div>
              <span className={`${styles.userID} ${styles.point_span}`}>
                yugwanhyi2546
              </span>
              <span className={styles.sub_span}>KWANEE </span>
            </div>
          </div>
        </div>
        <div className={styles.round}>
          <div className={styles.section_story}>
            <div className={styles.menu_title}>
              <span className={styles.sub_title}>스토리</span>
              <span className={styles.find_more}>모두 보기</span>
            </div>
          </div>
        </div>
        <ul className={styles.story_list}>
          <li>
            <div className={styles.gradient_wrap1}>
              <img className={styles.story} src="./img/story.jpg" />
            </div>
          </li>
        </ul>
        <div className={styles.section_recommend}>
          <div className={styles.menu_title}>
            <span className={styles.sub_title}>회원님을 위한 추천</span>
            <span className={styles.find_more}>모두 보기</span>
          </div>
          <ul className={styles.recommend_list}>
            <li>
              <div className={styles.recommend_friend_profile}>
                <img src="./img/member.jpg" />
              </div>
            </li>
          </ul>
        </div>
        <footer>
          <p className={styles.insta_sccript}>
            소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 약관
            ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
          </p>
          <p p className={styles.insta_sccript}>
            © 2020 INSTAGRAM FROM FACEBOOK
          </p>
        </footer>
      </div>
    </>
  );
};

export default index;
