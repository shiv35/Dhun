import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const navigate=useNavigate();
    const HandleSubmit = async () => {
        var raw = JSON.stringify({
            "userName": "shiv",
            "email": "shiv@gmail.com",
            "userPassword": "12345"
        });
        let result = await fetch("http://localhost:9090/registerNewUser", {
            method: 'post',
            body: raw,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        alert("Registered Successfully");
        navigate("/login");

    }
  return (
    <div>
      
    </div>
  )
}

export default SignUp
