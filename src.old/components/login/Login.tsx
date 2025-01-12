import axios from "axios";
import React, { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


function Login(){
    const navigate = useNavigate();
    let [userName, setUserName] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [showPassword, setShowPassword] = useState<boolean>(false);

  
    function updateUserName(event: any): void {
      setUserName(event.target.value);
    }
  
    function updatePassword(event: any): void {
      setPassword(event.target.value);
    }
  
    async function login() {
      
      try{
        const response = await axios.post("http://localhost:8080/users/login", { userName, password });
        const serverResponse = response.data;
        let token = 'Bearer ' + serverResponse;
        const cleanedToken = token.replace('Bearer ', ''); // הסרת "Bearer "
        axios.defaults.headers.common['Authorization']=token;
        
        localStorage.setItem('token',token);
        const decoded: any = jwtDecode(cleanedToken); // פענוח הטוקן
        const parsedSub = JSON.parse(decoded.sub); // פענוח JSON מתוך sub
        localStorage.setItem("userType",parsedSub.userType);
        localStorage.setItem("companyId",parsedSub.copmanyId);

        navigate('/');
        //console.log (serverResponse);
       }
       catch(e){
          alert("We were unable to connect to the system with the provided username and password");
      }
     
    }
  
    return (
  
      <div className='login'>
        <h1>Login</h1>
        <input type='email' placeholder='userName' onChange={updateUserName} />
        <br/>
        <input type={showPassword ? "text" : "password"} placeholder='password' onChange={updatePassword} />
        <br/>
        <button className='buttonLogin' onClick={login}>login</button>
      </div>
    );
}

export default Login;
