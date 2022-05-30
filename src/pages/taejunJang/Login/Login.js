import './Login.scss';
import React, {useState} from "react";
import {useNavigate, Link} from 'react-router-dom';


function Login() {
    const navigate = useNavigate ();
    const goToMain = () => {
        navigate("/main");
    };

    const [id, setId] = useState ('');
    const handleIdInput = (e) => {
        setId(e.target.value);
        validation();
    }

    const [pw, setPw] = useState ('');
    const hanldePwInput = (e) => {
        setPw(e.target.value);
        validation();
    }

    const validation = (id,pw) => {
        if (!id.includes('@')||pw.length < 8){
            return false;
        }
            return true;
    }

    const valid = validation(id,pw);
    console.log(valid);

    return(
        <div className="container">
        <div className="logo-box">
            <span className="logo-text">Justgram</span>
        </div>
        <div className="input-box">
            <input className="input-id i-box" type="text" name="idntify" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput}/>
            <input className="input-password i-box" type="password" name="password" placeholder="비밀번호" onChange={hanldePwInput}/>
            <button className="button-login" disabled={!validation(id,pw)} onClick={goToMain}>로그인</button>
        </div>
        <div className="extra-box">
        <Link to="#" onClick={e => e.preventDefault()}>비밀번호를 잊으셨나요?</Link>
        </div>
    </div>
    );
}
  
export default Login;
  