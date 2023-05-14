import React from "react";
import {
  WeeklyCardWrap,
  Title,
  SubTitle,
  Subscribe,
  WeeklyCta,
  IconWrapper
} from "../../style/cards/WeeklyCardSt";
import { GrMail } from "react-icons/gr";

const WeeklyCard = () => {
  return (
    <WeeklyCardWrap>
      <Title>Newsletters</Title>
      <SubTitle>Get weekly update</SubTitle>
      <WeeklyCta>
        <IconWrapper>
          <GrMail size="15"/>
        </IconWrapper>
        <input type="text" placeholder="example@gmail.com" />
        <Subscribe>Subscribe</Subscribe>
      </WeeklyCta>
    </WeeklyCardWrap>
  );
};

export default WeeklyCard;
