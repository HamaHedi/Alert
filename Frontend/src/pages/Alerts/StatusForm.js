import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Status, Status2, Status3 } from '../../components/Status';
import { makeStyles, Typography } from '@material-ui/core';
import DateAndTimePickers from '../../components/controls/DatePicker';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    margin: `${theme.spacing(1)}px auto`
  },
  text: {
    padding: theme.spacing(3),
    color: 'black'
  },
  formControl: {
    minWidth: 150
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  },
  option: {
    marginTop: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  },
  grid: {
    textAlign: 'center'
  },
  formControl2: {
    minWidth: 80
  }
}));

const DarkerDisabledTextField = withStyles({
  root: {
    marginRight: 8,
    '& .MuiInputBase-root.Mui-disabled': {
      color: 'blue'
    }
  }
})(Controls.Input);

function StatusForm(props) {
  const classes = useStyles();
  const { AlertName, DefaultStatus } = props;
  const [status, SetStatus] = React.useState(DefaultStatus);
  const { addOrEdit, recordForEdit } = props;
  const handleChange = (event) => {
    SetStatus(event.target.value);
  };
  const [state, setState] = React.useState({
    checkedB: false
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('alertNumber' in fieldValues)
      temp.alertNumber = fieldValues.alertNumber ? '' : 'required.';

    if ('Interval' in fieldValues)
      temp.Interval = fieldValues.Interval ? '' : 'required.';

    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x == '');
  };
  const initialFValues = {
    id: 0,
    alertNumber: '0',
    Interval: '0',
    Date: null,
    // hireDate: null,
    Time: null
  };
  const {
    value,
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className={classes.paper}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.paper}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography noWrap className={classes.text}>
              Alert Name :
            </Typography>
            <FormControl
              size='small'
              variant='outlined'
              className={classes.formControl}
            >
              <DarkerDisabledTextField
                id='outlined-basic'
                label='Alert Name'
                variant='outlined'
                defaultValue={AlertName}
                inputProps={{ readOnly: true, disableUnderline: true }}
                // size='small'
                style={{ width: 200 }}
              />
            </FormControl>

            <Typography noWrap className={classes.text}>
              Alert Status :
            </Typography>
            <FormControl
              size='small'
              variant='outlined'
              className={classes.formControl}
            >
              <InputLabel id='demo-simple-select-outlined-label'>
                Status
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                name='status'
                value={status}
                onChange={handleChange}
                label='Status'
                defaultValue={DefaultStatus}
                error={errors.status}
                size='small'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Online'}>
                  <Status />
                </MenuItem>
                <MenuItem value={'Offline'}>
                  <Status2 />
                </MenuItem>
                <MenuItem value={'Disabled'}>
                  <Status3 />
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <Grid className={classes.option}>
            {/* <Divider /> */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography noWrap className={classes.text}>
                Max alert :
              </Typography>
              <FormControl
                size='small'
                variant='outlined'
                className={classes.formControl2}
              >
                <Controls.Input
                  id='outlined-basic'
                  label='Alert'
                  name='alertNumber'
                  variant='outlined'
                  size='small'
                  type='number'
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 0
                    }
                  }}
                  value={values.alertNumber}
                  onChange={handleInputChange}
                  error={errors.alertNumber}
                  style={{ width: 80 }}
                />
              </FormControl>
              <Typography noWrap className={classes.text}>
                Interval :
              </Typography>
              <FormControl
                size='small'
                variant='outlined'
                className={classes.formControl2}
              >
                <Controls.Input
                  id='outlined-basic'
                  label='minute'
                  variant='outlined'
                  size='small'
                  type='number'
                  name='Interval'
                  InputProps={{
                    inputProps: {
                      max: 100,
                      min: 0
                    }
                  }}
                  value={values.Interval}
                  onChange={handleInputChange}
                  error={errors.Interval}
                  style={{ width: 80 }}
                />
              </FormControl>
            </div>
          </Grid>
          <Grid className={classes.option}>
            {(function () {
              if (status === 'Disabled') {
                return (
                  <Grid>
                    <Divider />
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Typography noWrap className={classes.text}>
                        Recover Alert :
                      </Typography>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.checkedB}
                            onChange={handleChangeSwitch}
                            name='checkedB'
                            color='primary'
                          />
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Typography noWrap className={classes.text}>
                        Automatically Recover Alert :
                      </Typography>
                      <DateAndTimePickers
                        disable={!state.checkedB}
                        // invalidDateMessage='Invalid Date Format'
                        // name='Date'
                        // value={values.Date}
                        onChange={handleInputChange}
                        name='Date'
                        label='Recover Date'
                        value={values.Date}
                      />
                      <Typography noWrap className={classes.text}>
                        Time :
                      </Typography>
                      <Controls.TimePickerS
                        disable={!state.checkedB}
                        // invalidDateMessage='Invalid Date Format'
                        // name='Date'
                        // value={values.Date}
                        onChange={handleInputChange}
                        name='Time'
                        label='Time'
                        value={values.Time}
                      />
                    </div>
                  </Grid>
                );
              } else {
              }
            })()}
          </Grid>
          <Grid className={classes.grid}>
            <Button
              variant='contained'
              className={classes.button}
              onClick={resetForm}
            >
              Reset
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Form>
  );
}

export default StatusForm;
