import styled from "styled-components";

export const FeedbackCardWrap = styled.div`
  width: 300px;
`;
export const FeedbackText = styled.div`
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.04);
  background-color: #dcdcdc;
  font-size: 16px;
  line-height: 28px;
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 768px) {
    padding: 10px;
    height: 300px;
  }
  &::after {
    /* content: ""; */
    width: 50px;
    height: 50px;
    background-color: #dcdcdc;
    position: absolute;
    bottom: -16%;
    left: 50%;
    clip-path: polygon(100% 0, 0 0, 0 64%);
  }
  p {
    padding: 10px;
    @media (max-width: 768px) {
      line-height: 1.1;
      padding: 10px;
    }
  }
`;

export const FeedbackContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    width: 100px;
    height: 70px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

export const FeedBackUser = styled.div`
  width: 100%;
  padding-left: 20px;
  color: #fff;
  p {
    font-size: 14px;
    margin: 5px 0;
  }
  p:nth-child(2) {
    font-weight: 600;
  }
`;
