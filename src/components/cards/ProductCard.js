import React from "react";

import {
  ProCardWrap,
  ProCapture,
  ProContent,
  ProTitle,
  ProDescription,
  ProSubText,
  ProImage,
  ProDis,
  ProCart,
  ProHide,
  ProAddCart,
  ProLike,
} from "../../style/cards/ProductCardSt";
import { FaStar, FaHeart, FaEye } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <ProCardWrap>
      {props.item.discount && <ProDis>{props.item.discount}</ProDis>}
      <ProCapture>
        <ProImage
          src={props.item.image}
          alt="pro"
        />
        <ProCart className="proCart">
          <ProHide>
            <FaEye size={14} color="#1f1f1f" />
          </ProHide>
          <ProAddCart>ADD TO CART</ProAddCart>
          <ProLike>
            <FaHeart size={14} color="#1f1f1f" />
          </ProLike>
        </ProCart>
      </ProCapture>
      <ProContent>
        <ProTitle>{props.item.title}</ProTitle>
        <ProDescription>
        {props.item.discounted}
          <span>{props.item.price}</span>
        </ProDescription>
        <ProSubText>
          
          {Array(props.item.stars)
            .fill(1)
            .map((el, i) => (
              <FaStar size={14} color="#ff2c53" />
            ))}
        </ProSubText>
      </ProContent>
    </ProCardWrap>
  );
};

export default ProductCard;
