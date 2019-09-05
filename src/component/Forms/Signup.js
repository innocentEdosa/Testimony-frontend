import React from 'react';
import './form.css';

const Signup = () => (
  <div className="twoSidedForm">
    <div className="leftSide">this is the left side now</div>
    <div className="rightSide">
      <form action="" method="" className="signupForm">
        <p className="infoText">
          Welcome we are really glad to have you join Testimony hub
        </p>
        <label className="formLabel">First name</label>
        <input
          id="firstName"
          className="formInput"
          type="text"
          name="firstName"
          required
        />
        <label htmlFor="lastName" className="formLabel">Last name</label>
        <input
          id="lastName"
          className="formInput"
          type="text"
          name="lastName"
          required
        />
        <label className="formLabel">Email</label>
        <input
          id="email"
          className="formInput"
          type="email"
          name="email"
          required
        />
        <label className="formLabel">Password</label>
        <input
          id="password"
          className="formInput"
          type="password"
          name="password"
          required
        />
        <label className="formLabel">Verify Password</label>
        <input
          id="lastName"
          className="formInput"
          type="text"
          name="lastName"
          required
        />
        <button type="submit" className="formButton">
          Sign up
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
