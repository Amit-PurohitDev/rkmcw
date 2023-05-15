import styled from "styled-components";

export const BannerWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  .swiper {
    width: 100%;
    height: 100%;
    background: #000;
  }
  .swiper-slide:nth-child(1){
    display: none;
  }

  .swiper-pagination{
    display: none;
  }
  
  .swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  display: flex;
  align-items: center;
  &>div{
    width: 50%;
    bottom: 15%;
    position: absolute;
  }
}
`;

export const ParallaxBG = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
`;