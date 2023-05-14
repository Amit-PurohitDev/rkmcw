import styled from "styled-components";

export const ExploreWrapper = styled.div`
  padding: 3em 2em;
`;

export const ExploreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const Viewall = styled.div`
  background-color: #c1c1c1;
  display: block;
  margin: 2em auto;
  width: 200px;
  text-align: center;
  padding: 2em;
  cursor: pointer;
  border-radius: 10px;
`;

export const NewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FeedBackContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  @media (max-width:768px) {
    gap: .5em;
  }
`;
