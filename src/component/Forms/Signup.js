import React from "react";
import "./form.css";
import Svg from '../Commons/SVG';
import { mobileGoggle, mobileChevronLeft, mobileFacebook } from '../Commons/svgs';

const Signup = () => {
  const renderForm = () => (
    <section className="signupWrapper">
      <div className="formBack">
        {Svg(mobileChevronLeft)}
      </div>
      <div className="formInfoText">
        <h4 className="formInfoText-heading">Sign Up</h4>
        <h6 className="formInfoText-sub">We are really glad to have you join Testimony Hub</h6>
      </div>
      <div className="socialAuth">
        <button type="submit" className="socialAuth-button socialAuth-button-facebook">
          {Svg(mobileFacebook)} <span className="pt-05 m-r">Sign up with facebook</span>
        </button>
        <button type="submit" className="socialAuth-button socialAuth-button-goggle">
        {Svg(mobileGoggle)} <span className=" m-r">Sign up with goggle</span>
        </button>
      </div>
      <p className="emailAuth">
        <span className="divider"> OR </span>
        <a href=""><span className="emailAuth-link">Sign up with your <span className="emphasis">Email</span></span></a>
         </p>
      <form className="signupForm" action="" method="">
      <div className="formGroup">
        <label htmlFor="email" className="formLabel">
          Your Email
        </label>
        <input type="email" name="email" className="formInput" id="email" required/>
      </div>
      <div className="formGroup">
        <label htmlFor="password" className="formLabel">
          Choose your Password
        </label>
        <input type="password" name="password" className="formInput" id="password" required/>
      </div>
      <div className="formGroup">
        <label htmlFor="confirmPassword" className="formLabel">
          Confirm your Password
        </label>
        <input type="password" name="confirmPassword" className="formInput" id="confirmPassword" required/>
      </div>
      <div className="formGroup">
        <button className="formButton" type="submit">
          Sign Up
        </button>
      </div>
      </form>
      <div className="subInfo">
      <a className="" href="" >Already have an account? <span className="emphasis">Log in</span></a>
      </div>
      <div className="policyAgreement">
        by clicking <span className="emphasis2">Sign up</span>,
        you agree to the <span className="emphasis2">terms and condition</span> of Testimony hub and also confirms that you have read our <span className="emphasis2">privacy agreement</span>
      </div>
    </section>

  );

  return renderForm();
};

export default Signup;
