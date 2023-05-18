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

  .swiper-pagination-bullets.swiper-pagination-horizontal{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide:nth-child(1){
    display: none;
  }

  .swiper-pagination{
    /* display: none; */
  }

  .swiper-pagination-bullet{
    background-color: #fff;
    opacity: 1;
    width: 30px;
    height: 10px;
    border-radius:3px ;
    transition:.4s;
  }

  .swiper-pagination-bullet-active{
    background-color: #ff2c53;
    width: 15px;
    height: 15px;
    transition:.4s;
    border-radius:50%;
    &:nth-child(1){
      clip-path: polygon(100% 0, 62% 49%, 100% 100%, 0 50%);
    }
    &:nth-child(3){
      clip-path: polygon(0 0, 100% 50%, 0 100%, 45% 48%);
    }
  }
  
  .swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 30px;
    font-size: 12px;
    line-height: 1.4;
  }
  &>div{
    width: 50%;
    bottom: 15%;
    position: absolute;
    @media (max-width: 768px) {
      width: 90%;
  }
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
