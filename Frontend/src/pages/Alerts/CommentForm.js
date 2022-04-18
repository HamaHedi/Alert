import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    width: 350
  },
  Text: {
    width: 240,
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(0.5)
  },
  Text2: {
    width: 300,
    margin: theme.spacing(2)
  },
  grid: {
    textAlign: 'center',
    flexGrow: 1
  }
}));

export default function CommentForm(props) {
  const classes = useStyles();
  const { AlertName, DefaultStatus } = props;

  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('alertNumber' in fieldValues)
      temp.alertNumber = fieldValues.alertNumber ? '' : 'required.';

    if ('Interval' in fieldValues)
      temp.Interval = fieldValues.Interval ? '' : 'required.';

    // if ('status' in fieldValues)
    //   temp.status =
    //     fieldValues.status.length != 0 ? '' : 'This field is required.';
    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x == '');
  };
  const initialFValues = {
    id: 0,
    alertName: '',
    remark: 'Add a remark'
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
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant='h5'>Alert Info</Typography>
            <Divider />
            <Divider />
            {/* <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            > */}
            {/* <Typography noWrap>Alert Name :</Typography> */}
            <Controls.Input
              className={classes.Text2}
              id='outlined-basic'
              label='Alert Name'
              name='alertName'
              variant='outlined'
              defaultValue={AlertName}
              inputProps={{ readOnly: true, disableUnderline: true }}
            />
            {/* </div> */}

            <Controls.Input
              className={classes.Text2}
              id='outlined-multiline-static'
              label='Add remark'
              multiline
              rows={5}
              name='remark'
              // defaultValue='Remark'
              variant='outlined'
              value={values.remark}
              onChange={handleInputChange}
              error={errors.alertNumber}
            ></Controls.Input>

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
          </Paper>
        </Grid>
      </Grid>
    </Form>
  );
}
