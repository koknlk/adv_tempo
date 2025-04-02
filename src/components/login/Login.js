import React from 'react';
import './login.css';
import logo from '../../assets/images/Advoc8se-logo.png'
import { useState } from 'react';
import { useAuth } from '../../services/auth';



const Login = () => {
  const { auth } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    
    auth(username, password);
  }
  return (
    <div className='login'>
      <div className='loginbody'>
        <div className="screen-1">
          <img className="loginlogo" src={logo} alt="Your Image" />
          <div className="email">
            <label for="email">Username</label>
            <div className="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="text"
                placeholder="Please enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="password">
            <label for="password">Password</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input className="pas" type="password"
                placeholder="Please enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <ion-icon className="show-hide" name="eye-outline"></ion-icon>
            </div>
          </div>
          <button className="login" onClick={handleAuth}>Login</button>
          <div className="footer"><span>Forgot Password?</span></div>
        </div>
      </div>
    </div>
  )

}
export default Login