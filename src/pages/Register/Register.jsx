import React, { useState, useEffect } from 'react';
import './Register.scss';
import { useNavigate, Navigate } from 'react-router-dom';

const Register = () => {

  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();



  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>EX-ZBT</h1>
          <button >Already have an account? Sign in</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              
            />
            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              
            />
            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
      
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              
            />
            {formErrors.username && <span className="error">{formErrors.username}</span>}

           

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
 
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm"
              value={confirmPassword}
 
            />
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
