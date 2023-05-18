import React from "react";
import {
  FeedBackUser,
  FeedbackCardWrap,
  FeedbackContent,
  FeedbackText,
  ImageWrapper
} from "../../style/cards/FeedbackCardSt";

const FeedbackCard = (props) => {
  return (
    <FeedbackCardWrap>
      <FeedbackText
        style={{
          color:"#000"
        }}
      >
        <p>
          {props.item.des}
        </p>
      </FeedbackText>
      <FeedbackContent>
        <ImageWrapper>
          <img
            src={props.item.image}
            alt="profile"
          />
        </ImageWrapper>
        <FeedBackUser>
          <p>{props.item.Name}</p>
          <p>{props.item.title}</p>
        </FeedBackUser>
      </FeedbackContent>
    </FeedbackCardWrap>
  );
};

export default FeedbackCard;
