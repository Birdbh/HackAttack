import "./Login.scss"

import {redirect, useNavigate,Navigate,Link} from "react-router-dom";
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
                  
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" name="loginParam" placeholder="Email or username" value={loginParam} onChange={(e) => setLoginParam(e.target.value)}/>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Link to="/profile" class="nav-link" >
                        <button>Login</button></Link>
                        <span
                         data-testid="error"
                         style={{visibility:error? "visible":"hidden"}}
                        >Something went wrong!
                        </span>
                    </form>

                </div>
                <p style={{ margin: "2px", padding: "5px", textAlign: "center" }}>
                    First time? <a href="/register">Register Here</a>
                </p>

            </div>
            
         

        </div>

        
    )
}

export default Login;