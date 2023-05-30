import styled from "styled-components";

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 20px 20px;
`;

export const CartTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #1f1f1f;
`;

export const CartTbody = styled.tbody`
    margin-left: 100px;
`;

export const CartTr = styled.tr`
@media (max-width: 768px){
    display: flex;
    align-items: flex-end;
}
border-bottom: 1px solid #dddddd;
    &.thead{
        background-color: #f6f7fb;
    }
`;

export const CartTh = styled.th`
  text-align: left;
  padding: 30px 10px;
`;

export const QtyCount = styled.td`
    width: 30px;
    text-align: center;
`;

export const CartTd = styled.td`
  
  text-align: left;
  padding: 25px 10px;
  &.close{
    background-color:#ff2c53;
  }
  &.quantity{
    display: flex;
    align-items: center;
    gap: 5px;
    & svg{
        cursor: pointer;
    }
  }
  &.delete{
    display: flex;
    justify-content: center;
    align-items: center;
    & svg{
        cursor: pointer;
    }
  }
`;
