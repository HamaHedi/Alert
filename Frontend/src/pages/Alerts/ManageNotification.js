import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useForm, Form } from '../../components/useForm';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Controls from '../../components/controls/Controls';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Dialogg from '../../components/Dialoge';
import Autocomplet from '../../components/AutoComplete';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 450,
    width: '30%'
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
    width: 600,
    height: 420
  },
  root2: {
    flexGrow: 1,
    maxWidth: 752
  },

  title: {
    margin: theme.spacing(2, 0, 0)
  },

  text: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 230
    }
  },
  buttons: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));
const initialFValues = {
  id: 0,
  email: '',
  name: '',
  namePhone: '',
  phone: '',
  message: ''
};
const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}
export default function FormNotif(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { addOrEdit, recordForEdit } = props;
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);
  console.log(emails);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';

    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x == '');
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValues(initialFValues);
  };
  const hadleClick = (value) => {
    setEmails((emails) => [...emails, value]);
    setOpen(false);
    setValues(initialFValues);
  };
  const hadleClick2 = (value) => {
    setPhones((phones) => [...phones, value]);
    setOpen(false);
    setValues(initialFValues);
  };
  const handleDelete = (data) => {
    console.log('datta', data);
  };
  console.log('emails', emails);
  return (
    <div>
      <AppBar position='static' color='default'>
        <Tabs
          variant='scrollable'
          value={value}
          onChange={handleChange}
          textColor='primary'
          indicatorColor='primary'
        >
          <Tab label='Email' icon={<EmailIcon />} {...a11yProps(0)} />
          <Tab label='SMS' icon={<PhoneIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Grid container>
          <Paper elevation={3} className={classes.paper}>
            <Grid>
              <Typography
                variant='h5'
                component='div'
                style={{ color: 'black' }}
              >
                Notify by Email
              </Typography>
            </Grid>
            <Divider />

            <Form onSubmit={handleSubmit}>
              <Grid item xs={12} md={12}>
                <Typography variant='h6' className={classes.title}>
                  Email Configuration :
                </Typography>

                <List>
                  {emails.length === 0 ? (
                    <Grid>
                      <ListItem>
                        <ListItemText primary='No data to display' />
                      </ListItem>
                      <Divider />
                    </Grid>
                  ) : (
                    <div></div>
                  )}
                  {emails.map((data) => (
                    <Grid>
                      <ListItem>
                        <ListItemText primary={data.email} />
                        <ListItemText primary={data.name} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge='end'
                            aria-label='delete'
                            onClick={() => handleDelete(data)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton edge='end' aria-label='delete'>
                            <EditIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </Grid>
                  ))}
                </List>
                <Button
                  color='primary'
                  startIcon={<AddIcon />}
                  onClick={handleClickOpen}
                >
                  {' '}
                  Add Email adress{' '}
                </Button>
              </Grid>
              <Dialogg
                openPopup={open}
                setOpenPopup={setOpen}
                onClose={handleClose}
                title='Add Email Address'
              >
                <div className={classes.text}>
                  <Controls.Input
                    name='name'
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    value={values.name}
                    onChange={handleInputChange}
                    error={errors.name}
                  />
                  <Controls.Input
                    name='email'
                    id='outlined-basic2'
                    label='Mail Address'
                    variant='outlined'
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>
                <Box display='flex' justifyContent='center'>
                  <Controls.Button
                    onClick={() => hadleClick(values)}
                    color='primary'
                    autoFocus
                    text='Confirm'
                  />
                  <Controls.Button
                    autoFocus
                    onClick={resetForm}
                    color='default'
                    text='Reset'
                  />
                </Box>
              </Dialogg>

              <Autocomplete
                multiple
                id='checkboxes-tags-demo'
                options={emails}
                onChange={(event, value) => console.log('eeeeeeeee', value)}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </React.Fragment>
                )}
                style={{ MaxWidth: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Select address'
                    placeholder='Search'
                  />
                )}
              />

              <Controls.Input
                name='message'
                id='outlined-basic2'
                label='Message'
                variant='outlined'
                value={values.message}
                onChange={handleInputChange}
              />
              <Grid container justify='center'>
                <div className={classes.buttons}>
                  <Controls.Button type='submit' text='Submit' />
                  <Controls.Button
                    text='Reset'
                    color='default'
                    onClick={resetForm}
                  />
                </div>
              </Grid>
            </Form>
          </Paper>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Paper elevation={3} className={classes.paper}>
            <Grid>
              <Typography
                variant='h5'
                component='div'
                style={{ color: 'black' }}
              >
                Notify by SMS
              </Typography>
            </Grid>
            <Divider />

            <Form onSubmit={handleSubmit}>
              <Grid item xs={12} md={12}>
                <Typography variant='h6' className={classes.title}>
                  Phone Configuration :
                </Typography>

                <List>
                  {phones.length === 0 ? (
                    <Grid>
                      <ListItem>
                        <ListItemText primary='No data to display' />
                      </ListItem>
                      <Divider />
                    </Grid>
                  ) : (
                    <div></div>
                  )}
                  {phones.map((data) => (
                    <Grid>
                      <ListItem>
                        <ListItemText primary={data.namePhone} />
                        <ListItemText primary={data.phone} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge='end'
                            aria-label='delete'
                            onClick={() => handleDelete(data)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton edge='end' aria-label='delete'>
                            <EditIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </Grid>
                  ))}
                </List>
                <Button
                  color='primary'
                  startIcon={<AddIcon />}
                  onClick={handleClickOpen}
                >
                  {' '}
                  Add Phone Number{' '}
                </Button>
              </Grid>
              <Dialogg
                openPopup={open}
                setOpenPopup={setOpen}
                onClose={handleClose}
                title='Add Phone Number'
              >
                <div className={classes.text}>
                  <Controls.Input
                    name='namePhone'
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    value={values.namePhone}
                    onChange={handleInputChange}
                    error={errors.name}
                  />
                  <Controls.Input
                    name='phone'
                    id='outlined-basic2'
                    label='Phone number'
                    variant='outlined'
                    value={values.phone}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </div>
                <Box display='flex' justifyContent='center'>
                  <Controls.Button
                    onClick={() => hadleClick2(values)}
                    color='primary'
                    autoFocus
                    text='Confirm'
                  />
                  <Controls.Button
                    autoFocus
                    onClick={resetForm}
                    color='default'
                    text='Reset'
                  />
                </Box>
              </Dialogg>

              <Autocomplete
                multiple
                id='checkboxes-tags-demo'
                options={phones}
                onChange={(event, value) => console.log('eeeeeeeee', value)}
                disableCloseOnSelect
                getOptionLabel={(option) => option.namePhone}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.namePhone}
                  </React.Fragment>
                )}
                style={{ MaxWidth: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant='outlined'
                    label='Select '
                    placeholder='Search'
                  />
                )}
              />

              <Controls.Input
                name='message'
                id='outlined-basic2'
                label='Message'
                variant='outlined'
                value={values.message}
                onChange={handleInputChange}
              />
              <Grid container justify='center'>
                <div className={classes.buttons}>
                  <Controls.Button type='submit' text='Submit' />
                  <Controls.Button
                    text='Reset'
                    color='default'
                    onClick={resetForm}
                  />
                </div>
              </Grid>
            </Form>
          </Paper>
        </Grid>
      </TabPanel>
    </div>
  );
}
