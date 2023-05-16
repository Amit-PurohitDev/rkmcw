import styled from "styled-components";

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 10px;
    @media (max-width: 768px) {
      height: 150px;
  }
  cursor: pointer;
  transition:.4s;
  .specialImage{
    transition:.4s;
    scale: 1.1;
  }
  &:hover .specialImage{
    transition:.4s;
    scale: 1.25;
  }
`;
export const ContentWrap = styled.div`
  position: absolute;
  color: #fff;
  top: 25%;
  right: 17%;
  width: 35%;
  @media (max-width: 768px) {
  width:90%;
  right  :0 ;
  }
`;
export const Title = styled.div`
  line-height: 1.3;
  margin-bottom: 20px;
  font-size: 40px;
    @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  position: relative;
      @media (max-width: 768px) {
    font-size: 13px;
  }
`;
