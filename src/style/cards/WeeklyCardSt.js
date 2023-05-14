import styled from "styled-components";

export const WeeklyCardWrap = styled.div`
  background-image: url("https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-5.jpg");
  width: 100%;
  padding: 5em 2.5em;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: rgb(96, 125, 139) 0px 0px 60px;
`;
export const WeeklyCta = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  input {
    padding-left: 66px;
    width: 390px;
    font-size: 14px;
    font-weight: 400;
    height: auto;
    line-height: 60px;
    background: #fff;
    box-shadow: none;
    padding: 0 30px;
    outline: none;
    border-radius: 6px;
    border: 0;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 40px;
  font-weight: 700;
  line-height: 1.3;
  font-size: 36px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 1%;
  top: 39%;
`;

export const Subscribe = styled.div`
  width: auto;
  background-color: rgb(41, 41, 48);
  color: rgb(255, 255, 255);
  padding: 21px 38px;
  border-radius: 6px !important;
  cursor: pointer;
`;
