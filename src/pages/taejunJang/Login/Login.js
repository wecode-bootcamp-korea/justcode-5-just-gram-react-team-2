import React from 'react';
import './Login.css';

function Login() {
    return(
        <div className="container">
        <div className="logo-box">
            <span className="logo-text">Justgram</span>
        </div>
        <div className="input-box">
            <input className="input-id i-box" placeholder="전화번호, 사용자 이름 또는 이메일"/>
            <input className="input-password i-box" placeholder="비밀번호"/>
            <button className="button-login">로그인</button>
        </div>
        <div className="extra-box">
            <a className="find-password" href="#">비밀번호를 잊으셨나요?</a>
        </div>
    </div>
    );
}
  

export default Login;
  