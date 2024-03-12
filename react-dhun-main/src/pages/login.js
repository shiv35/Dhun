import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const name = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const HandleSubmit = async () => {
        try{
            var raw = JSON.stringify({
                "userName": "shiv",
                "userPassword": "12345"
            });
            let result = await fetch("http://localhost:9090/authenticate", {
                method: 'post',
                body: raw,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            navigate("/");
        }
        catch(e){
              alert("Invalid username and password");
        }
      

    }
  return (
    <div>
      
    </div>
  )
}

export default Login
