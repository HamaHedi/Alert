import 'date-fns';
import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  date: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180
  }
}));
export default function TimePickerS(props) {
  // The first commit of Material-UI
  //   const [selectedDate, setSelectedDate] = React.useState(
  //     new Date('2014-08-18T21:11:54')
  //   );

  //   const handleDateChange = (date) => {
  //     setSelectedDate(date);
  //   };

  const { name, label, value, onChange, disable } = props;
  const classes = useStyles();
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value
    }
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin='normal'
        KeyboardButtonProps={{
          'aria-label': 'change time'
        }}
        variant='inline'
        inputVariant='outlined'
        size='small'
        className={classes.date}
        label={label}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        disabled={disable}
      />
    </MuiPickersUtilsProvider>
  );
}
