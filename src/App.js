import React, { useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import HomePage from './containers/HomePage';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { ThemeContext } from './context/themeContext';
import {useDispatch } from 'react-redux';
import { setAccount } from './redux/accountSlice';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './containers/ProfilePage';
import SearchPage from './containers/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch();
  const context = useContext(ThemeContext);
  const { theme } = context;

  useEffect(() => {
    window.ethereum.on('accountsChanged', (accounts) =>
      dispatch(setAccount(accounts.length ? accounts[0] : ''))
    );
  }, []);

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <Sidebar/>
          <div className='app-content'>
            <GlobalStyles />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />}/>
              <Route path="/search" element={<SearchPage />}/>
            </Routes>
          </div>
        </>
      </ThemeProvider>
  );
};

export default App;
