import styled from "styled-components";

export const MostProductWrap = styled.div`
  padding: 10px;
  box-shadow: #607D8B 0px 0px 60px;
  border-radius: 10px;
`;
export const MostProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MostProductImage = styled.div``;
export const MostProductContent = styled.div`
  width: 100%;
  padding: 0 20px;
`;
export const MostProductReview = styled.div`
  display: flex;
`;
export const MostProductTitle = styled.div`
  margin: 10px 0;
  color: #777777;
`;
export const MostProductCost = styled.div`
    font-size: 20px;
    font-weight: 700;
`;
export const MostProductCta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5em;
`;
export const MostProductCart = styled.div`
  border: 1px solid #607d8b;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: .4s;
  .icon {
    color: "#607D8B";
    transition: .4s;
  }
  &:hover {
    border: 1px solid #ff2c53;
    transition: .4s;
  }
  &:hover .icon {
    color: #ff2c53;
    transition: .4s;
  }
`;
export const MostProductLike = styled.div`
  border: 1px solid #607d8b;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  transition: .4s;
  cursor: pointer;
  .icon {
    color: "#607D8B";
    transition: .4s;
  }
  &:hover {
    border: 1px solid #ff2c53;
    transition: .4s;
  }
  &:hover .icon {
    color: #ff2c53;
    transition: .4s;
  }
`;
