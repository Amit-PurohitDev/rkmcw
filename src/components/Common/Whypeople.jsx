import React from "react";
import {
  CategoryWrap,
  ImageWrapper,
  ListContainer,
  ListItem,
  SubTitle,
  Title,
} from "../../style/common/CategorySt";
import ico from "../../constants/icons";
import images from "../../constants/images";

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
];

const Whypeople = () => {
  return (
    <CategoryWrap
      style={{
        backgroundImage: "url(" + images.weekly + ")",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
      }}
    >
      <SubTitle
        style={{
          color: "#fff",
        }}
      >
        Categories
      </SubTitle>
      <Title
        style={{
          color: "#fff",
        }}
      >
        Why People Choose Us
      </Title>
      <ListContainer>
        {category.map((item, index) => {
          return (
            <ListItem key={index}
            style={{
              backgroundColor: "#fff",
            }}
            >
              <ImageWrapper>
                <img src={ico[item.image]} alt="" srcset="" />
              </ImageWrapper>
              <p>{item.title}</p>
            </ListItem>
          );
        })}
      </ListContainer>
    </CategoryWrap>
  );
};

export default Whypeople;
