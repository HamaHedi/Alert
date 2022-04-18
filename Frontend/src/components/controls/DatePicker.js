import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  date: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180
  }
}));
export default function DateAndTimePickers(props) {
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
      <KeyboardDatePicker
        className={classes.date}
        disableToolbar
        variant='inline'
        inputVariant='outlined'
        label={label}
        format='MMM/dd/yyyy'
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
        disabled={disable}
        size='small'
      />
    </MuiPickersUtilsProvider>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   }
// }));

// export default function DateAndTimePickers(props) {
//   const classes = useStyles();
//   const { disable, name, label, value, onChange } = props;
//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         disabled={disable}
//         id='datetime-local'
//         type='datetime-local'
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true
//         }}
//         name={name}
//         value={value}
//       />
//     </form>
//   );
// }
