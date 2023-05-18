import React from "react";
import NewproductCard from "../cards/NewprodCard";
import { ExploreWrapper, NewContainer } from "../../style/common/ExploreSt";
import { SubTitle, Title } from "../../style/common/CategorySt";
import { Swiper, SwiperSlide } from "swiper/react";
import product from '../../constants/products';
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const productData = [
  {
    discount: "20% OFF",
    image:product.keyboard,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
  {
    discount: "20% OFF",
    image:product.cam,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
  {
    discount: "20% OFF",
    image:product.mouse,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
  {
    discount: "20% OFF",
    image:product.portable,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
    {
    discount: "20% OFF",
    image:product.speaker,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
  {
    discount: "20% OFF",
    image:product.laptop,
    title: "Level 20 RGB Cherry",
    discounted: "$2.99",
    price: "$49.99",
    stars: 5,
  },
];

const NewProduct = () => {
  return (
    <ExploreWrapper>
      <SubTitle>This Week’s</SubTitle>
      <Title>New Arrivals</Title>
      <NewContainer>
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          modules={[Autoplay]}
          loop={true}
          className="mySwiper"
          speed={4000}
        >
          {productData.map((item, index) => {
            return (
              <SwiperSlide 
                key={item+index} 
                data-swiper-autoplay="2000"
                >
                <NewproductCard key={item+index} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </NewContainer>
    </ExploreWrapper>
  );
};

export default NewProduct;
