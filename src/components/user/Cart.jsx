import React from "react";
import {
  CartTable,
  CartTd,
  CartTr,
  CartTh,
  CartTbody,
  QtyCount,
  CartHeader
} from "../../style/user/CartSt";
import {
  FaWindowClose,
  FaRegPlusSquare,
  FaRegMinusSquare,
} from "react-icons/fa";
import Navbar from '../Common/Navbar';
const Cart = () => {
  const productData = [
    {
      product: "Wireless PS Handler",
      price: "$124.00",
      quantity: "1",
      subtotal: "$275.00",
    },
    {
      product: "Wireless PS Handler",
      price: "$124.00",
      quantity: "1",
      subtotal: "$275.00",
    },
    {
      product: "Wireless PS Handler",
      price: "$124.00",
      quantity: "1",
      subtotal: "$275.00",
    },
    {
      product: "Wireless PS Handler",
      price: "$124.00",
      quantity: "1",
      subtotal: "$275.00",
    },
  ];
  return (
    <div>
      <Navbar />
      <CartHeader>
        <p>Your Cart</p>
        <p>Clear Shoping Cart</p>
      </CartHeader>
      <CartTable>
        <CartTbody>
          <CartTr className="thead">
            <CartTh></CartTh>
            <CartTh>Product</CartTh>
            <CartTh>Price</CartTh>
            <CartTh>Quantity</CartTh>
            <CartTh>Subtotal</CartTh>
          </CartTr>
          {productData.map((item, index) => {
            return (
              <CartTr key={index + "list"}>
                <CartTd className="delete">
                  <FaWindowClose size={20} color="#708a90" />
                </CartTd>
                <CartTd>{item.product}</CartTd>
                <CartTd>{item.price}</CartTd>
                <CartTd className="quantity">
                  <FaRegMinusSquare size={20} color="#708a90" />
                  <QtyCount>{item.quantity}</QtyCount>
                  <FaRegPlusSquare size={20} color="#708a90" />
                </CartTd>
                <CartTd>{item.subtotal}</CartTd>
              </CartTr>
            );
          })}
        </CartTbody>
      </CartTable>
      
    </div>
  );
};

export default Cart;
