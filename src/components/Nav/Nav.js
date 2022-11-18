import React from "react";
import styled from "styled-components";
// import ProfileImage from '../../assets/images/profilelg.png'

// dropdown button lib
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
  // background-color: lightyellow;
`;

const ProfileImg = styled.img`
  height: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`;

// dropdown menu

const Nav = () => {
  return (
    <Container>
      {/* Search */}
      <Form className="d-flex">
        <Form.Control
          size="sm"
          type="search"
          placeholder="Enter public key"
          className="me-2"
          aria-label="Search"
        />
        <Button size="sm" variant="outline-success">
          Search
        </Button>
      </Form>

      <DropdownButton
        style={{ margin: "10px" }}
        variant="light"
        size="sm"
        id="dropdown-basic-button"
        title="Setting "
      >
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Switch Account</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
      </DropdownButton>
      {/* <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon> */}
      <ProfileImg src={require("../../assets/images/profilelg.png")} />
    </Container>
  );
};

export default Nav;
