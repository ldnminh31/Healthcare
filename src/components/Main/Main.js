import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
// import Deposits from './Deposits/Deposits'

// import depositData from '../../DepositData.json'

const Container = styled.div`
  width: auto;
  margin-left: 16rem;
  position: relative;
  padding: 0 4rem;
//   background-color: lightgreen;
`;

const Main = () => {
  return (
    <Container>
      <Nav />
    <h2>Homepage</h2>
      {/* <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} /> */}
    </Container>
  );
};

export default Main;
