import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

export default function Form(){
  const [showPass,setShowPass] = useState(false);
  const changeShowPass = () =>{
    setShowPass(!showPass);
  }
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    axios
      .get(`http://localhost:3500/api/login/username/${username}/password/${password}`)
      .then((res) => {
        alert(res.data); // Hiển thị kết quả từ server
      })
      .catch((err) => {
        console.error(err); // Xử lý lỗi
      })
      .finally(()=>{
        setPassword("");
        setUsername("");
      })
  }
  const handleSignUp = () =>{
    axios
      .post("http://localhost:3500/api/signup",
      {
        username:username,
        password:password
      })
      .then((res) => {
        alert(res.data); // Hiển thị kết quả từ server
      })
      .catch((err) => {
        console.error(err); // Xử lý lỗi
      })
      .finally(()=>{
        setPassword("");
        setUsername("");
      })
  }
  return (
  <>
    <div className="form">
      <label for="username">username:</label><br></br>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}placeholder='type your username'></input><br></br>
      <label for="password">password:</label><br></br>
      <input type={showPass?"text":"password"} placeholder='type your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <input type='checkbox' name='showpass' id='showpass' onChange={changeShowPass}></input>
      <label for="showpass">Show password</label>
    </div>
    <button onClick={handleLogin}>login</button>
    <button onClick={handleSignUp}>Signup</button>
    </>
  );
}


