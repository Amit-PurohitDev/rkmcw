import React from "react";
import {
  FeedBackUser,
  FeedbackCardWrap,
  FeedbackContent,
  FeedbackText,
} from "../../style/cards/FeedbackCardSt";

const FeedbackCard = () => {
  return (
    <FeedbackCardWrap>
      <FeedbackText>
        <p>
          “ It’s amazing how much easier it has been to meet new people and
          create instantly non connections. I have the exact same personal the
          only thing that has changed is my mind set and a few behaviors. “
        </p>
      </FeedbackText>
      <FeedbackContent>
        <div>
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png"
            alt="profile"
          />
        </div>
        <FeedBackUser>
          <p>Head Of Idea</p>
          <p>James C. Anderson</p>
        </FeedBackUser>
      </FeedbackContent>
    </FeedbackCardWrap>
  );
};

export default FeedbackCard;
