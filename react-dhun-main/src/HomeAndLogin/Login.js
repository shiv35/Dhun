import React, {useRef, useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
function Login() {

    const [nameErr, setNameErr] = useState(true);
    const [nameMessage, setNameMessage] = useState("");
    
    const [passErr, setPassErr] = useState(true);
    const [passMessage, setPassMessage] = useState("");
    const nameL=useRef();
    const passL=useRef();
    const navigate = useNavigate();
    const  loginHandler=async(e)=> {
        e.preventDefault();
       
        if(!nameErr && !passErr){
          
            console.log("Valid Info");
            try {
                let raw = JSON.stringify({
                    "userName": nameL.current.value,
                    "userPassword": passL.current.value
                });
                let result = await fetch("http://localhost:9090/authenticate", {
                    method: 'post',
                    body: raw,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
               

                result=await result.json();
                
                let username = result.user.userName
                let token = `Bearer ${result.jwtToken}`
                localStorage.setItem("user",username);
                localStorage.setItem("token",token);
                navigate('/musicapp');
            }
            catch (e) {
                alert("Invalid username and password");
            }
        }
        else {            
            alert("Fill all the fields in the specified format");
        }
    }

    function lnameHandler(e) {
        let name = e.target.value;
        if(name.length == 0){
            setNameErr(true);
            setNameMessage("Name field cannot be empty");
        }
        else if(/[^a-zA-Z]/.test(name)) {
            setNameErr(true);
            setNameMessage("Name can only contain Alphabets");
        }
        else {
            setNameErr(false);
            setNameMessage("");
        }
    }

    function lpassHandler(e) {
        let pass = e.target.value;
        if (pass == "") {
            setPassMessage("Password cannot be empty");
            setPassErr(true);
        }
        else if (pass.length < 2) {
            setPassMessage("Password cannot be less than 8 characters")
            setPassErr(true);
        }
        else {
            setPassErr(false);
            setPassMessage("");   
        }
    }
  








    








    const Sname=useRef();
    const Semail=useRef();
    const Spass=useRef();
    const Scpass=useRef();
    const [snameErr, setSNameErr] = useState(true);
    const [snameMessage, setSNameMessage] = useState("");

    const [emailErr, setEmailErr] = useState(true);
    const [emailMessage, setEmailMessage] = useState(""); 

    const [spassErr, setSPassErr] = useState(true);
    const [spassMessage, setSPassMessage] = useState("");

    const [scpassErr, setSCPassErr] = useState(true);
    const [scpassMessage, setSCPassMessage] = useState("");

    const [spass, setSpass] = useState("");

    async function signupHandler (e) {
        e.preventDefault();
        if(!snameErr && !spassErr && !scpassErr && !emailErr){
            console.log("Valid Info");
            console.log(`${Sname},${Semail},${Spass}`)
            var raw = JSON.stringify({
                "userName":Sname.current.value ,
                "email":Semail.current.value ,
                "userPassword": Spass.current.value
            });
            let result = await fetch("http://localhost:9090/registerNewUser", {
                method: 'post',
                body: raw,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
          
            alert("Registered Successfully");

        }
        else {            
            alert("Fill all the fields in the specified format");
        }
    }

    function snameHandler(e) {
        let name = e.target.value;
        if(name.length == 0){
            setSNameErr(true);
            setSNameMessage("Name field cannot be empty");
        }
        else if(/[^a-zA-Z]/.test(name)) {
            setSNameErr(true);
            setSNameMessage("Name can only contain Alphabets");
        }
        else {
            setSNameErr(false);
            setSNameMessage("");
        }
    }

    function spassHandler(e) {
        let pass = e.target.value;
        setSpass(pass);
        if (pass == "") {
            setSPassMessage("Password cannot be empty");
            setSPassErr(true);
        }
        else if (pass.length < 8) {
            setSPassMessage("Password cannot be less than 8 characters")
            setSPassErr(true);
        }
        else {
            setSPassErr(false);
            setSPassMessage("");   
        }
    }

    function scpassHandler(e) {
        let pass = e.target.value;
        if (pass == "") {
            setSCPassMessage("Password cannot be empty");
            setSCPassErr(true);
        }
        else if (pass != spass) {
            setSCPassMessage("The entered password does not match the previous password");
            setSCPassErr(true);
        }
        else {
            setSCPassErr(false);
            setSCPassMessage("");   
        }
    }
    
    function emailHandler(e) {
        let email = e.target.value;
        if (email == "") {
            setEmailErr(true);
            setEmailMessage("Email field cannot be empty");
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr(true);
            setEmailMessage("Email entered is not valid");
        }
        else {
            setEmailErr(false);
            setEmailMessage("");  
        }
    }

















    return (
    <div className='body'>
        <section className="main">
            <div className="form_wrapper">
                <input type="radio" className="radio" name="radio" id="login" defaultChecked/>
                <input type="radio" className="radio" name="radio" id="signup" />
                <div className="tile">
                    <h3 className="login">Login Form</h3>
                    <h3 className="signup">Sign up Form</h3>
                </div>
    
                <label className="tab login_tab pb-3" htmlFor="login">
                    Login
                </label>
    
                <label className="tab signup_tab pb-3" htmlFor="signup">
                    Sign up
                </label>
                <span className="shape"></span>
                <div className="form_wrap">
                    <div className="form_fild login_form">
                        <div className="input_group">
                            <input type="text" className="input" placeholder="Enter your name" ref={nameL}onChange={lnameHandler} />
                            {nameErr  ? <small style={{color : 'red'}}>{nameMessage}</small> : ""}
                        </div>
                        <div className="input_group">
                            <input type="password" className="input" id="l_pwd" placeholder="Password" ref={passL} onChange={lpassHandler}/>
                            {passErr  ? <small style={{color : 'red'}}>{passMessage}</small> : ""}
                        </div>
                            
                        <button type="submit" className="btn" onClick={loginHandler}>Login</button>

    
                        <div className="not_mem">
                            <label htmlFor="signup">Not a member? <span> Signup now</span></label>
                        </div>
    
                    </div>
    
                    <div className="form_fild signup_form">
                        <div className="input_group">
                            <input type="text" className="input" placeholder="Enter your name" ref={Sname} onChange={snameHandler} />
                            {snameErr  ? <small style={{color : 'red'}}>{snameMessage}</small> : ""}
                        </div>
                        <div className="input_group">
                            <input type="email" className="input" placeholder="Email Address"ref={Semail} onChange={emailHandler}/>
                            {emailErr  ? <small style={{color : 'red'}}>{emailMessage}</small> : ""}
                        </div>
                        <div className="input_group">
                            <input type="password" className="input" placeholder="Password"ref={Spass} onChange={spassHandler} />
                            {spassErr  ? <small style={{color : 'red'}}>{spassMessage}</small> : ""}
                        </div>
    
                        <div className="input_group">
                            <input type="password" className="input" placeholder="Confirm Password" ref={Scpass} onChange={scpassHandler}/>
                            {scpassErr  ? <small style={{color : 'red'}}>{scpassMessage}</small> : ""}
                        </div>
    
                        <button type="submit" className="btn" onClick={signupHandler} >Signup</button>
    
                    </div>
                </div>
    
            </div>
        </section>
    </div>
  )
}

export default Login
