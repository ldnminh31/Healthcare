import React from "react";
import MenuLink from "./MenuLink";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from "styled-components";
// import NotFound from "../../Pages/Notfound";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-family: Poppins;
  font-weight: bold;
  align-text: center;
`;

const Menu = () => {
  return (
    <Container>
      {/* <Link to="/profile"><RouteSystem/></Link> */}


      <MenuLink title="Homepage" icon={"home"} active />
      <MenuLink title="Profile" icon={"file-multiple"} />
      <MenuLink title="Management" icon={"bank"} />
      <MenuLink title="Setting" icon={"cog"} />
    </Container>
  );
};

export default Menu;
