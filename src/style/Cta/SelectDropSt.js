import styled from "styled-components";

export const SelectContainer = styled.div`
    position: relative;
`;

export const Label = styled.div`
  display: inline-block;
  border: 1px solid;
  padding: 5px 20px;
  cursor: pointer;
  /* border-radius: 5px; */
`;

export const DropList = styled.div`
  display: ${props => props.show ? "block":"none"};
  position: absolute;
  cursor: pointer;
  z-index: 100;
  width: 100%;
  background-color: #c1c1c1;
`;

export const ListItem = styled.div`
    padding: 10px;
    border-bottom: 2px solid #fff;
`;
