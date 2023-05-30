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
  const data = props.item
  return (
    <NewProCardWrap>
      <NewProDis>{data.discount}% OFF</NewProDis>
      <NewProCapture>
        <NewProImage
          className="proCart"
          src={props.item.image}
          alt="pro"
        />
      </NewProCapture>
      <NewProContent>
        <NewProTitle>{data.title}</NewProTitle>
        <NewProDescription>
          ${data.discounted}
          <span>${data.price}</span>
        </NewProDescription>
        <NewProSubText>
          {Array(data.stars)
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
