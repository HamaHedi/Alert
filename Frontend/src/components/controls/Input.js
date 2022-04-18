import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    defaultValue,
    disable,
    ...other
  } = props;
  return (
    <TextField
      disabled={disable}
      variant='outlined'
      label={label}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
