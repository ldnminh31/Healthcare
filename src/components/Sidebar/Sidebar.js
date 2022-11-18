import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import ProfileImg from "../Profile/Profile";

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: lightblue;
`;

const Sidebar = () => {
  return (
    <Container>
      <ProfileImg />
      <Menu />
    </Container>
  );
};

export default Sidebar;
