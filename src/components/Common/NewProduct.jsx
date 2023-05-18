import React, { useEffect } from "react";
import NewproductCard from "../cards/NewprodCard";
import { ExploreWrapper, NewContainer } from "../../style/common/ExploreSt";
import { SubTitle, Title } from "../../style/common/CategorySt";
import { Swiper, SwiperSlide } from "swiper/react";
import product from '../../constants/products'
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
];

const NewProduct = () => {
  // const [numOFSlide, setNumOFSlide] = useState(3);

  // onresize(() => {
  //   if (window.matchMedia("(max-width: 700px)").matches) {
  //     setNumOFSlide(1);
  //   } else {
  //     setNumOFSlide(3);
  //   }
  // });

  useEffect(() => {

  }, [])

  return (
    <ExploreWrapper>
      <SubTitle>This Week’s</SubTitle>
      <Title>New Arrivals</Title>
      <NewContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {productData.map((item, index) => {
            return (
              <SwiperSlide key={item+index}>
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
