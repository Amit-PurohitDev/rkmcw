import React from "react";
import {
  ContentWrap,
  ImageWrap,
  SubTitle,
  Title,
} from "../../style/cards/SpecialCardSt";

const SpeccialCard = () => {
  return (
      <ImageWrap>
        <img
          className="specialImage"
          src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-01.png"
          alt=""
        />
        <ContentWrap>
          <Title>Rich sound for less</Title>
          <SubTitle>50% offer in winter</SubTitle>
        </ContentWrap>
      </ImageWrap>
  );
};

export default SpeccialCard;
