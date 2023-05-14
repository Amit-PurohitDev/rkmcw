import styled from "styled-components";

export const Signinwrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const LeftContent = styled.div`
  width: 40%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .forPass {
    position: absolute;
    border: 4px solid #fff;
    width: 200px;
    height: 100px;
    display: block;
    z-index: 100;
    top: -60%;
    border-radius: 10px;
    position: relative;
    margin: 0 auto;

    &::after {
      content: "";
      position: absolute;
      width: 10px;
      right: -6%;
      background: rgb(255, 255, 255);
      height: 50%;
      top: 25%;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    span {
      display: block;
      height: 100%;
      background: red;
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
      transition: 5s;
    }
  }
`;

export const FormContent = styled.div`
  width: 60%;
  height: 100%;
  padding: 20px;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  float: right;
  gap: 20px;
  position: fixed;
  padding: 0 10px;
`;

export const TextContent = styled.div`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export const SignCta = styled.div`
  font-size: 16px;
  padding: 20px;
  color: #fff;
  background: #8bc34a;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  font-weight: 600;
  margin-right: 5%;
`;

export const FormWrap = styled.div`
  margin-top: 10%;
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 60%;
`;

export const Header = styled.div`
  line-height: 1.3;
  color: #292930;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 1.65;
  color: #999fae;
  margin-bottom: 55px;
`;

export const InputWrap = styled.div`
  position: relative;
  border-radius: 5px;
  margin: 10% 0;
  cursor: pointer;
  span {
    position: absolute;
    top: -10%;
    background: rgb(255, 255, 255);
    z-index: 10;
    padding: 0px 10px;
    left: 10%;
    font-weight: 700;
    pointer-events: none;
  }
  input {
    font-size: 16px;
    outline: none;
    padding: 25px;
    border: 2px solid;
    width: 100%;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
    &:focus {
      border: 2px solid #3577f0;
      transition: 0.4s;
    }
    &:focus .topText {
      color: #3577f0;
      transition: 0.4s;
    }
  }
`;

export const FromCta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FromCtaSign = styled.div`
  font-size: 16px;
  padding: 20px;
  color: #fff;
  background: #3577f0;
  cursor: pointer;
  user-select: none;
  border-radius: 5px;
  font-weight: 600;
`;

export const FromCtaPassword = styled.div`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #3577f0;
`;
