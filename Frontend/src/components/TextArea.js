import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 300
  }
}));

export default function TextArea(props) {
  const { minRows } = props;
  return (
    <TextareaAutosize
      aria-label='minimum height'
      minRows={minRows}
      placeholder='Minimum 3 rows'
    />
  );
}
