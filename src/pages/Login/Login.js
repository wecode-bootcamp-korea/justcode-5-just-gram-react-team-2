import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const [identify, setIdentify] = useState("");
  const [password, setPassword] = useState("");

  const validation = (idText, pwText) => {
    if (!idText.includes("@")) {
      return false;
    }
    if (pwText.length < 7) {
      return false;
    }

    return true;
  };

  const buttonOnClick = () => {
    if (validation(identify, password)) {
      alert("로그인 되었습니다.");
      navigate("/main");
    } else {
      alert("로그인에 실패하였습니다.");
      setIdentify("");
      setPassword("");
    }
  };

  const valid = validation(identify, password);

  return (
    <div className="login_container">
      <div className="login_logo">JUSTGRAM</div>
      <form className="login_form">
        <input
          className="login_input"
          name="identify"
          type="email"
          placeholder="전화번호,사용자 이름 또는 이메일"
          value={identify}
          onChange={(event) => {
            setIdentify(event.target.value);
          }}
        />
        <input
          className="login_input"
          name="password"
          type="password"
          minLength={5}
          placeholder="비밀번호"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className={valid ? "login_button active" : "login_button inactive"}
          disabled={!valid}
          onClick={buttonOnClick}
        >
          로그인
        </button>
      </form>
      <div>
        <div className="divider "></div>
      </div>
      <div href="" className="forget_password">
        비밀번호를 잊으셨나요?
      </div>
    </div>
  );
}

export default Login;

// const Login = ({ setauthenticate }) => {
//   const navigate = useNavigate();
//   const [inputId, setInputId] = useState("");
//   const [inputPw, setInputPw] = useState("");
//   const [identify, setIdentify] = useState("");
//   const [password, setPassword] = useState("");

//   const handleInputId = (e) => {
//     setInputId(e.target.value);
//     console.log(setInputId);
//   };

//   const handleInputPw = (e) => {
//     setInputPw(e.target.value);
//     console.log(setInputPw);
//   };
//   const refreshPage = () => {
//     window.location.reload();
//   };
//   const validation = (idText, pwText) => {
//     if (!idText.includes("@")) {
//       return false;
//     }
//     if (pwText.length < 7) {
//       return false;
//     }

//     return true;
//   };
//   const check = (e) => {
//     const reg_crabz = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;
//     if (inputId.length == 0 && inputPw.length == 0) {
//       alert("빈칸을 채워주세요!");
//       setInputId("");
//       setInputId("");
//       // return false;
//       // refreshPage();
//     } else if (
//       inputId.indexOf("@") == -1 ||
//       inputPw.length < 5 ||
//       reg_crabz.exec(inputPw.value)
//     ) {
//       alert("비밀번호를 영문+숫자 6~20자 이내확인해주세요.");
//       setInputId("");
//       setInputId("");
//       return false;
//       // refreshPage();
//     }
//     // return true;
//   };
//   const loginUser = (e) => {
//     e.preventDefault();
//     console.log("id:", inputId);
//     console.log("pw", inputPw);
//     check() === false ? check() : navigate("/main");
//     console.log("check", check());
//     console.log("login event!!!");
//     setauthenticate(true);
//     navigate("/main");
//   };
//   const buttonOnClick = () => {
//     if (validation(identify, password)) {
//       alert("로그인 되었습니다.");
//       navigate("/main");
//     } else {
//       alert("로그인에 실패하였습니다.");
//       setIdentify("");
//       setPassword("");
//     }
//   };
//   const valid = validation(identify, password);
//   return (
//     <container>
//       <form onSubmit={(e) => loginUser(e)}>
//         <div className="container">
//           <div className="logo-box">
//             <span className="logo-text">Justgram</span>
//           </div>
//           <div className="input-box">
//             <input
//               className="input-common identify"
//               placeholder="전화번호, 사용자 이름 또는 이메일"
//               // onChange={handleInputId}
//               value={identify}
//               onChange={(event) => {
//                 setIdentify(event.target.value);
//               }}
//             />
//             <input
//               className="input-common password"
//               name="password"
//               type="password"
//               minLength={5}
//               placeholder="비밀번호"
//               value={password}
//               // onChange={handleInputPw}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <button
//               className={
//                 valid ? "login_button active" : "login_button inactive"
//               }
//               disabled={!valid}
//               onClick={buttonOnClick}
//             >
//               로그인
//             </button>
//             {/* <button type="submit">로그인</button> */}
//           </div>
//           <div className="extra-box">
//             <a className="find-password">비밀번호를 잊으셨나요?</a>
//           </div>
//         </div>
//       </form>
//     </container>
//   );
// };

// export default Login;
