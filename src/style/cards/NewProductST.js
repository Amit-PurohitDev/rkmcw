import styled from "styled-components";

export const NewProCardWrap = styled.div`
  display: inline-block;
  width: 200px;
  position: relative;
  cursor: pointer;
  &:hover .proCart {
    scale: 1.1;
    transition: 0.4s;
  }
`;

export const NewProCapture = styled.div`
  width: 100%;
  height: 75%;
  background-color: #f5f7fb;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const NewProContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const NewProTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  background: #f5f7fb;
  color: #9e9e9e;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: rgb(208 218 239) 0px 0px 10px;
`;

export const NewProDescription = styled.div`
  color: #292930;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  width: 100%;
  span {
    color: #d6d6d6;
    text-decoration: line-through;
    float: right;
  }
`;

export const NewProSubText = styled.div``;

export const NewProImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.4s;
`;

export const NewProDis = styled.div`
  display: inline-block;
  background: #8BC34A;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: #8BC34A 0px 3px 10px;
  position: absolute;
  right: -5%;
  top: 5%;
  z-index: 5;
`;

export const NewProCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  transition: 0.4s;
`;

export const NewProHide = styled.div`
  background: #9e9e9e;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewProAddCart = styled.div`
  background: #8BC34A;
  padding: 10px;
  font-size: 12px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
`;

export const NewProLike = styled.div`
  background: #9e9e9e;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
