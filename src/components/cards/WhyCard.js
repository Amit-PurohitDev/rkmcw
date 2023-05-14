import React from "react";
import {
  WhyCardImage,
  WhyCardText,
  WhyCardWrap,
  WhyCardContainer
} from "../../style/cards/WhyCardST";

const WhyCard = () => {
  return (
    <WhyCardContainer>
      <WhyCardWrap>
        <WhyCardImage>
          <img
            src="	https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service6.png"
            alt=""
          />
        </WhyCardImage>
        <WhyCardText>Fast & Secure Delivery</WhyCardText>
      </WhyCardWrap>
    </WhyCardContainer>
  );
};

export default WhyCard;
