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
