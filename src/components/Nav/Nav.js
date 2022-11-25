import React, { useState } from 'react';
import styled from 'styled-components';
// import ProfileImage from '../../assets/images/profilelg.png'

// dropdown button lib
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../redux/accountSlice';

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
  
  const dispatch = useDispatch();
  const account = useSelector((state)=>state.account);
  const handleConnect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      dispatch(setAccount(accounts[0]))
    } catch (error) {
      console.log(error)
    }
  };

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
        style={{ margin: '10px', display: account?'block':'none'}}
        variant="light"
        size="m"
        id="dropdown-basic-button"
        title={account.substring(0,2)+'...'+account.slice(-4)}
      >
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Switch Account</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
      </DropdownButton>
      {!account && <Button onClick={handleConnect}>Kết nối ví</Button>}
    </Container>
  );
};

export default Nav;
