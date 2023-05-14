import React from "react";
import ico from "../../constants/icons";
import {
  CategoryWrap,
  ImageWrapper,
  ListContainer,
  ListItem,
  Title,
  SubTitle,
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
              <ImageWrapper
                className="shadow"
                style={{
                  filter: "drop-shadow(7px 8px 10px #2c2c2c)",
                  transition: ".5s",
                  position: "relative",
                  left: "0%",
                }}
              >
                <img src={ico[item.image]} alt="" srcset="" />
              </ImageWrapper>
              <p
                style={{
                  position: "relative",
                  top: "20%",
                  fontSize: "14px",
                  fontWeight: 700,
                  background: "rgb(255, 255, 255)",
                  color: "rgb(63, 81, 181)",
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: " rgb(63, 81, 181) 0px 3px 10px",
                }}
              >
                {item.title}
              </p>
            </ListItem>
          );
        })}
      </ListContainer>
    </CategoryWrap>
  );
};

export default Category;
