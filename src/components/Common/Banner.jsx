import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { BannerWrap, ParallaxBG } from "../../style/common/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase/config';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { SubTitle, Title } from "../../style/common/CategorySt";

const Banner = () => {
  const [products, setproducts] = useState();

  useEffect(() => {
    (async () => {
      const colRef  = collection(db, 'bannerData')
      const snapShots = await getDocs(colRef);
      const docs = snapShots.docs.map(doc => doc.data())
      setproducts(docs)
    })()
  }, [])

  return (
    <BannerWrap>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ec044d",
          "--swiper-pagination-color": "#92a666",
        }}
        className="mySwiper"
        modules={[ Pagination, Navigation, Parallax]}
        parallax={true}
        speed={1600}
        navigation={true}
        
        pagination={{
          clickable: true,
        }}
      >
        <ParallaxBG
          slot="container-start"
          className="parallax-bg"
          img={images.macbook}
          data-swiper-parallax="-23%"
        ></ParallaxBG>
        {products && products.map((item, index) => {
          return (
            <SwiperSlide 
            key={index}>
              <div>
                <SubTitle data-swiper-parallax="-600">{item.title}{index+1}</SubTitle>
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
