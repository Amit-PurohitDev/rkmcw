import styled from "styled-components";

export const ProCardWrap = styled.div`
  display: inline-block;
  width: 20%;
    @media (max-width: 768px) {
    width: 29%;
  }
  position: relative;
  cursor: pointer;
  &:hover .proCart {
    bottom: 3.5%;
    opacity: 1;
    transition: 0.4s;
  }
`;
export const ProCapture = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    height: auto;
  }
  background-color: #f5f7fb;
  box-shadow: rgb(208 218 239) 0px 0px 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;
export const ProImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProDis = styled.div`
  display: inline-block;
  background: #3f51b5;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: #3f51b5 0px 3px 10px;
  position: absolute;
  right: -5%;
  top: 5%;
  z-index: 5;
`;
export const ProCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  position: absolute;
  bottom: -10%;
  opacity: 0;
  transition: 0.4s;
`;
export const ProHide = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProAddCart = styled.div`
  background: #3f51b5;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
`;
export const ProLike = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProContent = styled.div`
  padding: 10px 0;
`;
export const ProTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #777777;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ProDescription = styled.div`
  color: #292930;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  span {
    color: #d6d6d6;
    text-decoration: line-through;
    float: right;
  }
`;
export const ProSubText = styled.div``;
