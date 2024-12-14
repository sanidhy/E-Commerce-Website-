import React,{useState} from 'react'
import AmazonLogo from './../../../Assests/amazon_logo_dark.png'
import './login.css'
import axios from 'axios';


export const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[name,setName]=useState("")

  // const obj={
  //   email:email,
  //   password:password
  // }

  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login_btn=async()=>{
    // alert(email+password)
    console.log(password)
    const response=await axios.post('http://localhost:9000/login',{email:email,Password:password})
    if(response){
      alert(response.data.name)
    }
    else{
      alert("NO")
    }
  }

  const signup_btn=()=>{

  }
  return (
    <div className="amazon-sign-in">
      <header>
        <img src={AmazonLogo} className="amazonLogo"alt="Amazon Logo" />
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main>
        <div className="items">
          <h3>Sign in</h3>
          <label htmlFor="email">Enter Your Credentials</label>
          <div className="input">
            <input type="text" 
                  className="email" 
                  onChange={handleEmailChange}
                  placeholder="Enter your email" />
          </div>
          <div className="input">
            <input type="password" 
                  className="password" 
                  onChange={handlePasswordChange}
                  placeholder="Enter your Password" />
          </div>
          <div className="Button">
            <button onClick={login_btn}>Continue</button>
          </div>
          <p>
            By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and{' '}
            <a href="#">Privacy Notice.</a>
          </p>
          
          <div className="info">
            <button>New To Amazon SignUp</button>
          </div>
        </div>
      </main>
    </div>
  )
}