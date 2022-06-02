import React from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [identify, setIdentify] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // const { email, password } = inputs;
  const onClick = (event) => {
    const loginURL = "http://52.79.143.176:8000/users/login"; // AIP 접속 url
    fetch(loginURL, {
      method: "POST", // 전송방식
      body: JSON.stringify({
        // 통신을 할 때는 String 형태의 JSON으로 보내야 하기 때문에 JSON.stringify 라는 메서드를 활용해서
        // 포맷을 기존의 javascript object 에서 JSON String 으로 변환해준다.
        email: identify,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json", // 해당 DATA를 어떻게 받는 것을 지정한다. Content-Type 은 text/html 형식을 받는다.
      },
    })
      .then((response) => {
        if (response.status === 200) {
          //로긴을 시도했을때 200번대가 나오면 로긴에 성공한 것이다.
          navigate("/main");
        } else {
          alert("로그인에 실패하였습니다."); // 400번대가 나오면 로긴에 실패한 것이다.
        }
        return response.json(); // json 의 응답 정보를 jsonData에 넘겨주기 위해 return 한다.
      })
      .then((jsonData) => {
        localStorage.setItem("token", jsonData.token); //localStorage 는 저장소로 로긴이 되었을때 setItem의 key값인 token과 value 값인
        // jsonData.token 값을 저장한다.
        console.log(jsonData);
      });
  };

  // const [valid, setValid] = useState(false);

  // const validation = () => {
  //   const isIdPwInputValid = identify.includes("@") && password.length >= 7;
  //   setValid(isIdPwInputValid);
  // };

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
  // const valid = validation();
  return (
    <div className={styles.login_container}>
      <div className={styles.login_logo}>JUSTGRAM</div>
      <form className={styles.login_form}>
        <input
          className={styles.login_input}
          name="identify"
          type="email"
          placeholder="전화번호,사용자 이름 또는 이메일"
          values={identify}
          onChange={(event) => {
            setIdentify(event.target.value) && { onChange };
          }}
          // onChange={onChange}
        />
        <input
          className={styles.login_input}
          name="password"
          type="password"
          minLength={5}
          placeholder="비밀번호"
          values={password}
          onChange={(event) => {
            setPassword(event.target.value) && { onChange };
          }}
          // onChange={onChange}
        />
        <button
          className={
            valid
              ? `${styles.login_button} ${styles.active}`
              : `${styles.login_button} ${styles.inactive}`
          }
          disabled={!valid}
          // onClick={buttonOnClick}
          onClick={onClick}
        >
          로그인
        </button>
      </form>
      <div>
        <div className={styles.divider}></div>
      </div>
      <div href="" className={styles.forget_password}>
        비밀번호를 잊으셨나요?
      </div>
    </div>
  );
}

export default Login;
