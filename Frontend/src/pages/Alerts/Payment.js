import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import Main from '../../components/Main';
import { StateProvider } from '../../StateContext/index2';
import theme1 from '../../constants/theme';
import Header from '../../components/Header2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Payment = () => (
  <BrowserRouter>
    <Route path='/test'>
      <ThemeProvider theme={theme1}>
        <StateProvider>
          <div style={{ flexGrow: 1 }}>
            <Header title='PAYMENT FORM' logoLink='logo.svg' />
            <Main />
            {/* <Footer /> */}
          </div>
        </StateProvider>
      </ThemeProvider>
    </Route>
  </BrowserRouter>
);

export default Payment;
