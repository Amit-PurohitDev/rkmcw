import styled from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  color: #fff;
  background-color: rgba(0,0,0,0.9);
  z-index: 10000;
`;
export const NavLogo = styled.div``;
export const NavSection = styled.div`
  display: flex;
  gap: 4%;
  height: 100%;
  align-items: center;
  justify-content: center;
  & a{
    color: #fff;
    text-decoration: none;
    width: 120px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    font-size: 14px;
    text-transform:uppercase;
  }
`;
export const UserSection = styled.div`
    display: flex;
    gap: 20px;
`;
