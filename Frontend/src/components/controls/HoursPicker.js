import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150
  }
}));

export default function HoursPickers(props) {
  const classes = useStyles();
  const { defaultValue, label, disable, value, onChange } = props;
  return (
    <form className={classes.container} noValidate>
      <TextField
        disabled={disable}
        variant='outlined'
        id='time'
        value={value}
        label={label}
        type='time'
        onChange={onChange}
        size='small'
        defaultValue={defaultValue}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          step: 300 // 5 min
        }}
        style={{ width: 150 }}
      />
    </form>
  );
}
