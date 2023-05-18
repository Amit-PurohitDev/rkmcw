import React from "react";

import {
    NewProCardWrap,
    NewProCapture,
    NewProContent,
    NewProTitle,
    NewProDescription,
    NewProSubText,
    NewProImage,
    NewProDis,
    NewProCart,
    NewProHide,
    NewProAddCart,
    NewProLike,
  } from "../../style/cards/NewProductST";
  import { FaStar, FaHeart, FaEye } from "react-icons/fa";

const NewProductCard = (props) => {
  return (
    <NewProCardWrap>
      <NewProDis>20% OFF</NewProDis>
      <NewProCapture>
        <NewProImage
          className="proCart"
          src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png"
          alt="pro"
        />
      </NewProCapture>
      <NewProContent>
        <NewProTitle>Level 20 RGB Cherry</NewProTitle>
        <NewProDescription>
          $2.99
          <span>$49.99</span>
        </NewProDescription>
        <NewProSubText>
          {Array(5)
            .fill(1)
            .map((el, i) => (
              <FaStar key={el+i} size={14} color="#ff2c53" />
            ))}
        </NewProSubText>
        <NewProCart>
          <NewProHide>
            <FaEye size={14} color="#fff" />
          </NewProHide>
          <NewProAddCart>ADD TO CART</NewProAddCart>
          <NewProLike>
            <FaHeart size={14} color="#fff" />
          </NewProLike>
        </NewProCart>
      </NewProContent>
    </NewProCardWrap>
  );
};

export default NewProductCard;
