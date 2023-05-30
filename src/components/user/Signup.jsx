import React, { useState } from "react";
import icons from "../../constants";
import {
  Signinwrap,
  LeftContent,
  FormContent,
  TopContent,
  TextContent,
  SignCta,
  FormWrap,
  Header,
  Subtitle,
  InputWrap,
  FormContainer,
  FromCta,
  FromCtaSign,
  FromCtaPassword,
} from "../../style/user/SignupSt";

const Signup = () => {
  const [currentState, setcurrentState] = useState("signin");
  const [anim, setanim] = useState(false);

  function signin(e) {
    setcurrentState(e.target.id);
  }
  function onFocusIn() {
    setanim(true)
  }
  function onBlurOut() {
    setanim(false)
  }
  return (
    <Signinwrap>
      <LeftContent>
        {currentState === "signin" ? (
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-10.jpg"
            alt="proo"
          />
        ) : currentState === "signup" ? (
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg"
            alt="fill"
          />
        ) : (
          <>
          <img src={icons.icons.forgotp} alt="fill" />
          <span className="forPass">
            <span style={{width:anim ? 70+"%" : 10+"%"}} ></span>
          </span>
          </>
        )}
      </LeftContent>
      <FormContent>
        <TopContent>
          <TextContent>
            {currentState === "signin" ? "Already a member?" : "Not a member?"}
          </TextContent>
          {currentState !== "signin" ? (
            <SignCta id="signin" onClick={signin}>
              Sign Up Now
            </SignCta>
          ) : (
            <SignCta id="signup" onClick={signin}>
              Sign In
            </SignCta>
          )}
        </TopContent>
        <FormWrap>
          <FormContainer>
            <Header>
              {currentState === "signin"
                ? "I'm New Here"
                : currentState === "signup"
                ? "Sign in to eTrade."
                : "Forgot Password?"}
            </Header>
            <Subtitle>
              {currentState === "fpass"
                ? "Enter the email address you used when you joined and we’ll send you instructions to reset your password."
                : "Enter your detail below"}
            </Subtitle>
            {currentState === "signin" && (
              <InputWrap>
                <span className="topText">User Name</span>
                <input type="text" placeholder="annie@example.com" />
              </InputWrap>
            )}

            <InputWrap>
              <span className="topText">Email</span>
              <input onBlur={onBlurOut} onFocus={onFocusIn} type="text" placeholder="annie@example.com" />
            </InputWrap>
            {currentState === "fpass" ? null : (
              <InputWrap>
                <input type="password" placeholder="password" />
                <span className="topText">Password</span>
              </InputWrap>
            )}

            <FromCta>
              {currentState === "signin" ? (
                <FromCtaSign>Create Account</FromCtaSign>
              ) : currentState === "signup" ? (
                <>
                  <FromCtaSign>Sign In</FromCtaSign>
                  <FromCtaPassword id="fpass" onClick={signin}>
                    Forgot Password ?
                  </FromCtaPassword>
                </>
              ) : (
                <FromCtaSign>Send reset Instruction</FromCtaSign>
              )}
            </FromCta>
          </FormContainer>
        </FormWrap>
      </FormContent>
    </Signinwrap>
  );
};

export default Signup;
