import { Link } from 'react-router-dom';
import "./Login.scss";

function Login() {
    return (
        <div className="container">
            <div className="logo-box">
                <span className="logo-text">Justgram</span>
            </div>
            <div className="input-box">
                <input className="input-id i-box" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <input className="input-password i-box" placeholder="비밀번호"/>
                <button className="button-login"><Link to="/main">로그인</Link></button>
            </div>
            <div className="extra-box">
                <Link className="find-password" to="">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>   
    );
}

export default Login;