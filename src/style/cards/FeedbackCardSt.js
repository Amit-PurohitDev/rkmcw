import styled from "styled-components";

export const FeedbackCardWrap = styled.div`
  width: 300px;
`;
export const FeedbackText = styled.div`
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.04);
  background-color: #dcdcdc;
  font-size: 16px;
  line-height: 28px;
  @media (max-width: 768px) {
    padding: 10px;
    height: 300px;
  }
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: #dcdcdc;
    position: absolute;
    bottom: -16%;
    left: 50%;
    clip-path: polygon(100% 0, 0 0, 0 64%);
  }
  p {
    @media (max-width: 768px) {
      line-height: 1.1;
    }
  }
`;

export const FeedbackContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FeedBackUser = styled.div`
  width: 100%;
  padding-left: 20px;
  p {
    font-size: 14px;
    margin: 5px 0;
  }
  p:nth-child(2) {
    font-weight: 600;
  }
`;
