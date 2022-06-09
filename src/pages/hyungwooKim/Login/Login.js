import "./Login.scss"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  const [id, setId] = useState ('');
  const handleIdInput = (e) => { 
    setId(e.target.value);
  };
  
  const [pw, setPw] = useState ('');
  const handlePwInput = (e) => {
    setPw(e.target.value);
  };
  
  const validation = (id, pw) => {
    if (!id.includes('@')||pw.length < 8) {
      return false;
    } 
    return true ;
  };
  
  const valid = validation(id, pw);
  
  const navigate = useNavigate ();
  const goToMain = () => {
    fetch("http://52.79.143.176:8000/users/login", {
      method: "POST",
			headers: {
			'Content-Type': "application/json",
			},
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => { console.log(result)
        if(result.message==="client input invalid") {
         alert("로그인에 실패했습니다. ")
        } else{
          navigate('/main');
        }
        localStorage.setItem('token', result.token)
      }
      );
    }

    return (
      <div>
          <div className="login_container">
            <div className="login_logo_box">
              <span className="login_logo_text">justgram</span>
            </div>
            <div className="login_input_box">
              <input 
                className="login_input_common_identify" 
                type="text" 
                name="identify" 
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={ handleIdInput }
              />
              <input 
                className="login_input_common_password" 
                type="password" 
                name="password" 
                placeholder="비밀번호" 
                onChange={ handlePwInput }
              />
              <button 
                className={valid? 'login_btn_active' : 'login_btn_inactive'}  
                name="loginbtn" 
                disabled={!validation(id, pw)} 
                onClick = {goToMain}> 
                로그인
              </button>
            </div>
              <div className="login_extra_box">
                <a href="#!" className="login_find_password">비밀번호를 잊으셨나요?</a>
              </div>
          </div>
      </div>
    );
  }




export default Login;
  