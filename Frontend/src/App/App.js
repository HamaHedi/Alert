import React, { useState } from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import {
  makeStyles,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@material-ui/core';

import Alerts from '../pages/Alerts/Alerts';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#333996',
        light: '#3c44b126'
      },
      secondary: {
        main: '#f83245',
        light: '#f8324526'
      },
      background: {
        default: '#f4f5fd'
      },
      type: darkMode ? 'dark' : 'light'
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props: {
      MuiIconButton: {
        disableRipple: true
      }
    }
  });

  const useStyles = makeStyles({
    appMain: {
      // paddingLeft: '320px',
      width: '100%'
    }
  });
  const classes = useStyles();
  // const handelDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SideMenu />
        {/* <Switch onChange={handelDarkMode} value={darkMode} /> */}
        <div className={classes.appMain}>
          {/* <Header /> */}
          <Alerts />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
