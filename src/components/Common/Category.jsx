import React from "react";
import ico from "../../constants/icons";
import {
  CategoryWrap,
  ListContainer,
  ListItem,
  Title,
  SubTitle,
  CategoryImageWrapper,
  CategoryText
} from "../../style/common/CategorySt";

const category = [
  {
    title: "IPhone",
    image: "iphone",
  },
  {
    title: "Macbook Pro",
    image: "macpro",
  },
  {
    title: "Macbook Air",
    image: "macm1",
  },
  {
    title: "Macbook 16",
    image: "mac16",
  },
  {
    title: "IMac",
    image: "imac",
  },
  {
    title: "IPad",
    image: "ipad",
  },
  {
    title: "Air Pods",
    image: "airpods",
  },
  {
    title: "IPhone",
    image: "imac",
  },
  {
    title: "Macbook Pro",
    image: "macpro",
  },
  {
    title: "Macbook Air",
    image: "macm1",
  },
  {
    title: "Macbook 16",
    image: "mac16",
  },
  {
    title: "IMac",
    image: "imac",
  },
  {
    title: "IPad",
    image: "ipad",
  },
  {
    title: "Air Pods",
    image: "airpods",
  },
  {
    title: "IPhone",
    image: "imac",
  },
];

const Category = () => {
  return (
    <CategoryWrap style={{ backgroundColor: "#e8e8e" }}>
      <SubTitle>Categories</SubTitle>
      <Title>Browse by Category</Title>
      <ListContainer>
        {category.map((item, index) => {
          return (
            <ListItem
              style={{
                border: "unset",
              }}
              key={index}
            >
              <CategoryImageWrapper
                className="shadow"
                style={{
                  
                }}
              >
                <img src={ico[item.image]} alt="img"  />
              </CategoryImageWrapper>
              <CategoryText
                style={{
                  boxShadow: " rgb(63, 81, 181) 0px 3px 10px",
                }}
                className="categoryText"
              >
                {item.title}
              </CategoryText>
            </ListItem>
          );
        })}
      </ListContainer>
    </CategoryWrap>
  );
};

export default Category;
