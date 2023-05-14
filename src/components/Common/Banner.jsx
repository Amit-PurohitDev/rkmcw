import React from "react";
import images from "../../constants/images";
import { BannerWrap, ParallaxBG } from "../../style/common/Banner";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { SubTitle, Title } from "../../style/common/CategorySt";

const data = [
  {
    title: "amit",
    subTitle: "Browse by Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
  },
  {
    title: "rakesh",
    subTitle: "Browse by Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
  },
  {
    title: "rohit",
    subTitle: "Browse by Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.",
  },
];

const Banner = () => {
  return (
    <BannerWrap>
      <Swiper
        style={{
          "--swiper-navigation-color": "#c5ec04",
          "--swiper-pagination-color": "#92a666",
        }}
        speed={1600}
        parallax={true}
        
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 100,
        }}
      >
        <ParallaxBG
          slot="container-start"
          className="parallax-bg"
          img={images.macbook}
          data-swiper-parallax="-23%"
          Autoplay={true}
        ></ParallaxBG>
        <SwiperSlide>
          <SubTitle data-swiper-parallax="-700">Categories</SubTitle>
          <Title data-swiper-parallax="-1200">Browse by Category</Title>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <SubTitle data-swiper-parallax="-700">{item.title}{index+1}</SubTitle>
                <Title data-swiper-parallax="-1200">{item.subTitle}</Title>
                <div className="text" data-swiper-parallax="-100">
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannerWrap>
  );
};

export default Banner;
