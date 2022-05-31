import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.scss";

function Login() {
    const [inputs, setInputs] = useState({
        identify: "",
        password: ""
    });
    
    const handleInputByName = (event) => {
        const { name, value } = event.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const checkInputValid = inputs.identify.includes("@") && inputs.password.length>7
    
    const navigate = useNavigate();

    const loginEnter = (event) => {
        if (checkInputValid && event.key === "Enter") {
            loginButton()
        }
    }

    const loginButton = () => {
        fetch("http://52.79.143.176:8000/users/login", {
            method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
            body: JSON.stringify({
              email: inputs.identify,
              password: inputs.password,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
                result.token !== undefined
                ? navigate("/main")
                : alert(result.message)
            });
    }

    return (
        <div className="container">
            <div className="logo-box">
                <span className="logo-text">Justgram</span>
            </div>
            <div className="input-box">
                <input name="identify" type="text" className="input-id i-box" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleInputByName} onKeyUp={loginEnter}/>
                <input name="password" type="password" className="input-password i-box" placeholder="비밀번호" onChange={handleInputByName} onKeyUp={loginEnter}/>
                <button className={checkInputValid ? "button-login activate" : "button-login deactivate"} disabled={!checkInputValid} onClick={loginButton}>로그인</button>
            </div>
            <div className="extra-box">
                <Link className="find-password" to="">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    );
}

export default Login;