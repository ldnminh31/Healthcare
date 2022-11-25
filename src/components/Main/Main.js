import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

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
      {/* <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} /> */}
    </Container>
  );
};

export default Main;
