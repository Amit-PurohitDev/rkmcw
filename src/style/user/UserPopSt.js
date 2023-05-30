import styled from "styled-components";

export const UserWrapper = styled.div`
  position: absolute;
  top: 180%;
  background-color: #111213;
  right: ${(props) => (props.disp ? "-1020%" : "-32%")};
  transition: all 0.4s ease 0s;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const UserContainer = styled.div`
  background-color: rgb(67 74 0);
  height: 100px;
`;

export const UserSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  padding-top: 0;
  position: relative;
  top: -50px;
`;

export const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
export const UserEmail = styled.div`
  font-size: 12px;
  color: #ffc107;
  font-weight: 600;
`;
export const UserCta = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #202124;
  padding: 18px 0;
  border-radius: 10px;
`;
export const UserText = styled.div`
  background: #111213;
  padding: 15px 18px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #111213;
  font-size: 12px;
`;
export const UserSignOut = styled.div`
  text-align: left;
  width: auto;
  color: #f44336;
  position: absolute;
  bottom: -12%;
  font-size: 12px;
  left: 68%;
`;
