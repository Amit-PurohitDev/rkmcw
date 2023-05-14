import React from "react";
import { CategoryWrap, ListContainer } from "../../style/common/CategorySt";
import SpeccialCard from "../cards/SpeccialCard";

const category = [
    {
      title: "IPhone",
      image: "iphone",
    },
    {
      title: "Macbook Pro",
      image: "macpro",
    },
  ];

const Promotion = () => {
  return (
    <CategoryWrap>
      <ListContainer>
        {category.map((item, index) => {
          return (
           <SpeccialCard key={item + index}/>
          );
        })}
      </ListContainer>
    </CategoryWrap>
  );
};

export default Promotion;
