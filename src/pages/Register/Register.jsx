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
  const [grade, setGrade] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  let navigate = useNavigate();



  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Maaktabi</h1>
          <p>Sign Up and we can customize your learning plan</p>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >

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

            <label>Were you in school prior to 2021?</label>
            <div>
              <input type="radio" id="yes" name="school" value="Yes"/>
              <label for="yes"> Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="school" value="No"/>
              <label for="no"> No</label>
            </div>

            <label for="hours">Do you have regular access to an iPhone or tablet and if so, how often:</label>
            <select name="hours" id="hours">
              <option value="">Select number of hours</option>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
              <option value="11">11 hours</option>
              <option value="12">12 hours</option>
              <option value="13">13 hours</option>
              <option value="14">14 hours</option>
              <option value="15">15 hours</option>
              <option value="16">16 hours</option>
              <option value="17">17 hours</option>
              <option value="18">18 hours</option>
              <option value="19">19 hours</option>
              <option value="20">20 hours</option>
            </select>
          
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
