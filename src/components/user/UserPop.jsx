import React from "react";
import ico from "../../constants/icons";
import { FaCartPlus, FaHamburger, FaUserAlt } from "react-icons/fa";
import {
  ImageWrap,
  UserContainer,
  UserCta,
  UserEmail,
  UserName,
  UserSelect,
  UserSignOut,
  UserText,
  UserWrapper,
} from "../../style/user/UserPopSt";

const UserPop = (props) => {
  return (
    <UserWrapper disp={props.disp}>
      <UserContainer>
      </UserContainer>
        <UserSelect>
          <ImageWrap>
            <img src={ico.airpods} alt="dfgh" />
          </ImageWrap>
          <UserName>Amit Purohit</UserName>
          <UserEmail>amitpurohit.dev@gmail.com</UserEmail>
          <UserCta>
            <FaCartPlus style={{cursor:"pointer"}}/>
            <FaHamburger style={{cursor:"pointer"}}/>
            <FaUserAlt style={{cursor:"pointer"}}/>
          </UserCta>
          <UserText>Manage your Account</UserText>
          <UserSignOut>Sign Out</UserSignOut>
        </UserSelect>
      
    </UserWrapper>
  );
};

export default UserPop;
