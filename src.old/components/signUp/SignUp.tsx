import axios from "axios";
import React, { useState } from "react";
import './SignUp.css';


function SignUp(){
    let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [amountOfKids, setAmountOfKids] = useState<number>(0);
  let [phone, setPhone] = useState("")
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const userTypy = "Customer";

  function updateName(event: any): void {
    setName(event.target.value);
  }

  function updateAddress(event: any): void {
    setAddress(event.target.value);
  }
  function updatePhone(event: any): void {
    setPhone(event.target.value);
  }
  function updateAmountOfKis(event: React.ChangeEvent<HTMLInputElement>): void {
    setAmountOfKids(+event.target.value);
  }

  function updateUserName(event: any): void {
    setUserName(event.target.value);
  }

  function updatePassword(event: any): void {
    setPassword(event.target.value);
  }

  async function sinUp() {
        debugger;
    try{
      const response = await axios.post("http://localhost:8080/customers", {
        name,
        address,
        phone,
        amountOfKids,
        user: {
          userName,
          password,
          userType: userTypy,
          companyId: null     
        }
      });
      const serverResponse = response.data;
      console.log (serverResponse);
      alert("good");
      
     }

     catch(e){
      console.log(e);
    }
   
  }


  return (
    <div className="sinUp">
      <h1>signUp</h1>
      <input type='text' placeholder='Name' onChange={updateName} />
      <br/>
      <input type='text' placeholder='address' onChange={updateAddress} />
      <br/>
      <input type='number' placeholder='amount of kids' onChange={updateAmountOfKis} />
      <br/>
      <input type='text' placeholder='phone' onChange={updatePhone} />
      <br/>
      <input type='email' placeholder='userName' onChange={updateUserName} />
      <br/>
      <input type='password' placeholder='password' onChange={updatePassword} />
      <br/>
      <button className='buttonLogin' onClick={sinUp}>signup</button>


    </div>
  );
}

export default SignUp;