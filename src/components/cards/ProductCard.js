import React, { useRef } from "react";

import {
  ProCardWrap,
  ProCapture,
  ProContent,
  ProTitle,
  ProDescription,
  ProImage,
  ProDis,
  ProCart,
  ProHide,
  ProAddCart,
  ProLike,
} from "../../style/cards/ProductCardSt";
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import dataReturn from "../../firebase/Data";
import { add } from "../../store/cartSlice";
import { useDispatch } from "react-redux";


const ProductCard = (props) => {
  const dispatch = useDispatch();
  const ref = useRef();
  function addProduct() {
    dataReturn("productdata")
      .then((res) => {
        return res;
      })
      .then( (response) => {
        response.map((item, index) => {
          if(ref.current.id === item.id.toString()){
            dispatch(add(item))
          }
        })
      });
  }

  return (
    <ProCardWrap ref={ref} id={props.prooductId}>
      {props.item.discount && <ProDis>{props.item.discount} % OFF</ProDis>}
      <ProCapture>
        <ProImage src={props.item.image} alt="pro" />
        <ProCart className="proCart">
          <ProHide>
            <Link to="/cart">
              <FaEye size={14} color="#1f1f1f" />
            </Link>
          </ProHide>
          <ProAddCart onClick={addProduct}>ADD TO CART</ProAddCart>
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
      </ProContent>
    </ProCardWrap>
  );
};

export default ProductCard;
