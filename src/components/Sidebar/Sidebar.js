import React, { useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import ProfileImg from '../Profile/Profile';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../../redux/accountSlice';

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
  padding-top: 100px;
  // background-color: lightblue;
`;

const Sidebar = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const handleConnect = async () => {
    if (account)
      return;
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      dispatch(setAccount(accounts[0]));
    } catch (error) {
      console.log(error);
    }
  };
  //
  useEffect(() => {
    handleConnect();
  }, [])
  
  //
  return (
    <Container>
      {account && (
        <>
          <h1>Account</h1>
          <div>{account.substring(0, 10) + '...' + account.slice(-10)}</div>
        </>
      )}
      {!account && <Button onClick={handleConnect}>Connect wallet</Button>}
      <Menu />
    </Container>
  );
};

export default Sidebar;
