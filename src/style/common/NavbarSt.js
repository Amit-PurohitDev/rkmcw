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
  .hamburger{
    display: none;
  }
  padding: 0 20px;
  @media (max-width:768px){
    padding: 0 20px;
    z-index: 10000;
    .hamburger{
      display: block;
    }
  }
`;
export const NavLogo = styled.div``;
export const NavSection = styled.div`
  display: flex;
  gap: 4%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width:768px){
    flex-direction: column;
    position: absolute;
    background-color: #000;
    width: 100%;
    height:100vh;
    top: 100%;
    transition: .4s;
    gap: 0%;
    display: block;
    left: ${props => props.status ? "0em" : "30em"};
    z-index: 1;
  }
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
    @media (max-width:768px){
      height: auto;
      width: 100%;
      display: block;
      text-align: right;
    }
  }
`;
export const UserSection = styled.div`
    display: flex;
    gap: 20px;
    position: relative;
    p{
      cursor: pointer;
    }
`;
