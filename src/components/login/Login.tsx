import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import exp from "constants";

function Login(){
    let navigate = useNavigate();
    let [username, setUsername] = useState<string>("");
    let [password, setPassword] = useState<string>("");

    function updateUsername(event: any): void {
        setUsername(event.target.value);
    }
    function updatePassword(event: any): void {
        setPassword(event.target.value)
    }

    async function login() {
      
        try{
          const response = await axios.post("http://localhost:8080/users/login", { username, password });
          const serverResponse = response.data;
          let token = 'Bearer ' + serverResponse;
          const cleanedToken = token.replace('Bearer ', '');
          axios.defaults.headers.common['Authorization']=token;
          
          localStorage.setItem('token',token);
          const decoded: any = jwtDecode(cleanedToken);
          const parsedSub = JSON.parse(decoded.sub);
          localStorage.setItem("userType",parsedSub.userType);
          localStorage.setItem("companyId",parsedSub.copmanyId);
  
          navigate('/');
         }
         catch(e){
            alert("We were unable to connect to the system with the provided username and password");
        }
      }
      
      return (
  
        <div className='login-container'>
            <div className="login">
          <input type="text" placeholder="Enter your username" onChange={updateUsername} />
          <br/>
          <input type="password" placeholder="Enter your password" onChange={updatePassword} />
          <br/>
          <input className="login-button" type="button" value={"Login"} onClick={login}></input>
        </div>
        </div>
      );
}

export default Login;