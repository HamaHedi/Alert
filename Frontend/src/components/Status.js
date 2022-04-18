import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  button: {
    height: 40,
    borderRadius: 30
  },

  label2: {
    color: 'green'
  },
  label: {
    color: 'red'
  },
  label3: {
    color: 'grey'
  }
}));
export function Status(props) {
  const classes = useStyles();
  const { onClick } = props;
  const defaultProps3 = {
    bgcolor: 'background.paper',
    borderColor: 'green',
    m: 1,
    border: 1,
    style: { width: '7rem', height: '2rem' }
  };
  return (
    <div>
      <Box
        borderRadius={16}
        {...defaultProps3}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          classes={{ root: classes.button, label: classes.label2 }}
          color='primary'
          disableRipple={true}
          onClick={onClick}
        >
          <DoneIcon
            style={{
              fontWeight: 'bold',

              borderRadius: 20,
              display: 'inline-block'
            }}
          />
          online
        </Button>
      </Box>
    </div>
  );
}
export function Status2(props) {
  const classes = useStyles();
  const { onClick } = props;
  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'red',
    m: 1,
    border: 1,
    style: { width: '7rem', height: '2rem' }
  };

  return (
    <div>
      <Box
        borderRadius={16}
        {...defaultProps}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          classes={{ root: classes.button, label: classes.label }}
          variant='raised'
          color='primary'
          disableRipple={true}
          onClick={onClick}
        >
          <HighlightOffIcon
            style={{
              fontWeight: 'bold',
              color: 'red',
              borderRadius: 20,
              display: 'inline-block'
            }}
          />
          Offline
        </Button>
      </Box>
    </div>
  );
}
export function Status3(props) {
  const classes = useStyles();
  const { onClick } = props;
  const defaultProps2 = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    borderColor: 'grey',
    style: { width: '7rem', height: '2rem' }
  };

  return (
    <div>
      <Box
        borderRadius={16}
        {...defaultProps2}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          classes={{ root: classes.button, label: classes.label3 }}
          variant='raised'
          color='primary'
          disableRipple={true}
          onClick={onClick}
        >
          <RemoveCircleOutlineIcon
            style={{
              fontWeight: 'bold',
              borderRadius: 20,
              color: 'grey',
              display: 'inline-block'
            }}
          />
          Disabled
        </Button>
      </Box>
    </div>
  );
}
