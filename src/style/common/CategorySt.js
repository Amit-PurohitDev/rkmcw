import styled from "styled-components";

export const CategoryWrap = styled.div`
  padding: 3em 2em;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    /* flex-direction: column; */
  }
  width: ${window.innerWidth};
  overflow: hidden;
  overflow-x: scroll;
  gap: 2em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubTitle = styled.p`
  margin: 1em 0;
`;

export const Title = styled.h1`
  margin: 1em 0;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #1f1f1f;
  border-radius: 10px;
  padding: 2em;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  p {
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CategoryImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  p {
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  filter: drop-shadow(7px 8px 10px #2c2c2c);
  transition: 0.5s;
  position: relative;
  left: 0%;
`;

export const CategoryText = styled.div`
  position: relative;
  top: 20%;
  font-size: 14px;
  font-weight: 700;
  background: rgb(255, 255, 255);
  color: rgb(63, 81, 181);
  padding: 5px;
  border-radius: 5px;
`;
