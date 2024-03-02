import "./Login.scss"

import {redirect, useNavigate,Navigate,} from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginParam, setLoginParam] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();


    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>EX-ZBT</h1>
                    <p>
                    The purpose of the software is to provide a video sharing platform 
                     It allows users to register, create profiles, upload and share videos and receive feedback based on their video submissions.
                    </p>
                    <button >Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" name="loginParam" placeholder="Email or username" value={loginParam} onChange={(e) => setLoginParam(e.target.value)}/>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button disabled={!loginParam || !password} type="submit">{loading ? "Please wait" : "Login"}</button>
                        <span
                         data-testid="error"
                         style={{visibility:error? "visible":"hidden"}}
                        >Something went wrong!
                        </span>
                    </form>

                </div>
            </div>
            
         

        </div>

        
    )
}

export default Login;