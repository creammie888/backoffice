import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('เข้าสู่ระบบด้วย:', { username, password });
    //เพิ่มโค้ดตรวจสอบ username & password ตรงนี้

    if (username === 'admin' && password === '123456') {
      navigate('/dashboard');
    } else {
      alert('Username หรือ Password ไม่ถูกต้อง');
    }
  };

  return (
    <div className='container'>
      <div className='login-page'>
        <div className='login-logo'>
          <h1>LOGO</h1>
        </div>
        <div className='login-background'>
          <div className='login-input'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className='login-form'>
                <input type="text" value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
                placeholder='Username'/>

                <input type="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
                placeholder='Password'/>

                <button type='submit'>
                Login
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Login;
