import React from "react";
import MenuLink from "./MenuLink";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from "styled-components";
import { useSelector } from "react-redux";
// import NotFound from "../../Pages/Notfound";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-family: Poppins;
  font-weight: bold;
  align-text: center;
`;

const Menu = () => {
  const account = useSelector((state) => state.account);
  return (
    <Container>
      <MenuLink title="Homepage" icon={"home"} path="/" />
      {account && <MenuLink title="Profile" icon={"file-multiple"} path="/profile"/>}
      <MenuLink title="Search" icon={"magnify"} path="/search" />
    </Container>
  );
};

export default Menu;
