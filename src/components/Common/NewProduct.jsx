import React, { useEffect, useState } from "react";
import NewproductCard from "../cards/NewprodCard";
import { ExploreWrapper, NewContainer } from "../../style/common/ExploreSt";
import { SubTitle, Title } from "../../style/common/CategorySt";
import { Swiper, SwiperSlide } from "swiper/react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const NewProduct = () => {
  const [products, setproducts] = useState();

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "productdata");
      const snapShots = await getDocs(colRef);
      const docs = snapShots.docs.map((doc) => doc.data());
      setproducts(docs);
    })();
  }, []);

  return (
    <ExploreWrapper>
      <SubTitle>This Week’s</SubTitle>
      <Title>New Arrivals</Title>
      <NewContainer>
        <Swiper
          style={{
            "--swiper-navigation-color": "#c5ec04",
            "--swiper-pagination-color": "#92a666",
          }}
          slidesPerView={3}
          spaceBetween={1}
          modules={[Autoplay, Navigation]}
          loop={true}
          className="mySwiper"
          speed={4000}
          pagination={{
            clickable: true,
          }}
        >
          {products && products.map((item, index) => {
            return (
              <SwiperSlide key={item + index} data-swiper-autoplay="2000">
                <NewproductCard key={item + index} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </NewContainer>
    </ExploreWrapper>
  );
};

export default NewProduct;
