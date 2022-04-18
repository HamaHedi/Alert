import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as alertService from '../../services/alertService';
import { makeStyles } from '@material-ui/core/styles';
import {
  addAlert,
  getCard,
  updateAlert
} from '../../redux/actions/alertActions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import { layerObject } from '../../components/cardData';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Listt from '../../components/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { vecteur1, variable1 } from '../../components/cardData';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Notification from '../../components/Notification';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import { Alert, AlertTitle } from '@material-ui/lab';

const alertItem = [
  { id: 'NormalAlert', title: 'Normal Alert' },
  { id: 'doublethresholds', title: 'Double Thresholds' }
];

const initialFValues = {
  id: 0,
  alertName: '',
  alertType: 'NormalAlert',
  alertmessage: '',
  days: 0,
  minute: 0,
  hours: 0,
  percentage: 0,
  percentageMin: 0,
  percentageMax: 0,
  minuteMax: 0,
  hoursMax: 0,
  daysMax: 0,
  minuteMin: 0,
  hoursMin: 0,
  daysMin: 0,
  variable: '',
  path: ''
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  butt: {
    marginLeft: 60
  },
  number: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '7ch'
    }
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  buttons: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  alert: {
    maxWidth: 350
  },
  tabs: {
    flexGrow: 1,
    width: '200%',
    backgroundColor: theme.palette.background.paper
  },
  root: {
    maxWidth: 345,

    maxHeight: 300
  },
  Breadcrumbs: {
    padding: theme.spacing(2)
  },
  text: {
    padding: theme.spacing(3),
    color: 'black'
  },
  cardContent: {
    width: '100%',
    maxWidth: 360,
    height: 200,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 150
  },
  root3: {
    flexGrow: 1
  },
  paper3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));
function TabPanel(props) {
  const { children, valuetab, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={valuetab !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {valuetab === index && (
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
  valuetab: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`
  };
}
function AlertForm(props) {
  const [layerList, setlayerList] = useState(layerObject);
  const dispatch = useDispatch();
  const { addOrEdit, recordForEdit, submited } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('alertName' in fieldValues)
      temp.alertName = fieldValues.alertName ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid.';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 7 ? '' : 'Minimum 8 numbers required.';

    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x == '');
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);
  console.log('propsvalue', values);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    props.getCardName();
    if (recordForEdit != null) {
      setValues({
        ...recordForEdit
      });
      setDisableInput(false);
    }
    console.log('recccord', recordForEdit);
  }, [recordForEdit]);

  const classes = useStyles();

  const submit = () => {
    if (recordForEdit != null) {
      props.updateAlertInfo(values);
    } else {
      props.addAlertName(values);
    }
    console.log('valalertalertues', values);
    submited(true);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////
  const cards = props.cards;
  console.log('caaards', cards);
  const [schema, setSchema] = useState([]);
  const [valuetab, setValueTab] = useState();
  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  const [disableInput, setDisableInput] = useState(true);
  const [vector, setVector] = useState(vecteur1);
  const [variable, setVariable] = useState(variable1);
  const [cardList, setCardList] = useState([]);
  const [NextCard, setNextCard] = useState(false);
  let selectedVariable = 'selected Variable';

  const generCard = (value) => {
    setNextCard(true);
    setCardList((cardList) => [value]);
    setSchema((schema) => [...schema, value.name]);
    if (cardList.length >= 1) {
      cardList.splice(0, 5);
      schema.splice(0, 5);
      setVecteurList([]);
      setConfirm(false);
      setNextCard2(false);
      setNextCard3(false);
      setNextCard4(false);
      setVariableList([]);
      setConfirmVariable(false);
    }
  };
  console.log('schema', schema);

  const [NextCard2, setNextCard2] = useState(false);
  const generCard2 = (value) => {
    setNextCard2(true);
    setCardList((cardList) => [...cardList, value]);
    setSchema((schema) => [...schema, value.name]);
    if ((cardList.length = 2)) {
      setVecteurList([]);
      setConfirm(false);
      cardList.splice(1, 1);
      schema.splice(1, 5);
      setNextCard2(false);
      setVariableList([]);
    }
  };
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });
  const [NextCard3, setNextCard3] = useState(false);
  const generCard3 = (value) => {
    setNextCard3(true);

    setCardList((cardList) => [...cardList, value]);
    setSchema((schema) => [...schema, value.name]);
    if ((cardList.length = 3)) {
      cardList.splice(2, 1);
      schema.splice(2, 5);
      setNextCard3(false);
      setVecteurList([]);
      setConfirm(false);
      setVariableList([]);
    }
  };
  const [vecteurList, setVecteurList] = useState([]);
  const [NextCard4, setNextCard4] = useState(false);
  const generCard4 = (value) => {
    setNextCard4(true);

    setVecteurList((vecteurList) => [value]);
    setSchema((schema) => [...schema, value.name]);
    if (schema.length > 3) {
      schema.splice(3, 5);

      setVariableList([]);
      setConfirmVariable(false);
      setDisableInput(true);
    }
  };
  const [confirm, setConfirm] = useState(false);
  const handelClick = () => {
    setConfirm(true);
  };

  console.log('NextCard3', NextCard3);
  console.log('vectorList', vecteurList);
  console.log('cardList', cardList);
  const [variableList, setVariableList] = useState([]);
  const generCard5 = (value) => {
    setVariableList(value);

    console.log('variablename', variableList.name);

    selectedVariable = value.name;

    setSchema((schema) => [...schema, value.name]);

    setValues({
      ...values,
      variable: selectedVariable
    });
    if (schema.length >= 4) {
      schema.splice(4, 10);
      // selectedVariable = value.name;
    }
    if (variableList.name !== selectedVariable) {
      setConfirmVariable(false);
      setDisableInput(true);
    }
  };
  console.log('variableList', variableList);
  const [confirmVariable, setConfirmVariable] = useState(false);
  const handelConfirm = () => {
    setConfirmVariable(true);
    setDisableInput(false);
    let path = schema.toString();
    setValues({
      ...values,
      path: path
    });
    setNotify({
      isOpen: true,
      message: 'Variable selected Successfully'
    });
  };

  const [cardList2, setcardList2] = useState([]);

  const handelClick3 = (value) => {
    schema.splice(0, 10);
    cards.map((cards) => {
      if (cards.layer === value._id) {
        setcardList2((cardList2) => [...cardList2, cards]);
      }
    });
    if ((cardList2.length = 4)) {
      cardList2.splice(0, 4);
    }
    setVecteurList([]);
    setConfirm(false);
    setNextCard2(false);
    setNextCard3(false);
    setNextCard4(false);
    setVariableList([]);
    setConfirmVariable(false);
  };
  console.log('cardList2', cardList2);
  const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'green',
    m: 1,
    border: 2,
    style: { width: '2.5rem', height: '1.5rem' }
  };
  const defaultProps2 = {
    bgcolor: 'green',
    borderColor: 'green',

    border: 1,
    style: { width: '1.1rem', height: '1.2rem' }
  };
  const defaultP = {
    borderColor: '#DC143C',
    border: '3px solid'
  };
  const defaultP2 = {
    borderColor: '#DC143C',
    border: '2px solid'
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        {' '}
        <Grid item xs={12}>
          <Controls.RadioGroup
            name='alertType'
            label='Alert Type'
            value={values.alertType}
            onChange={handleInputChange}
            items={alertItem}
          />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              {' '}
              <Controls.Input
                name='alertName'
                label='alertName'
                value={values.alertName}
                onChange={handleInputChange}
                error={errors.alertName}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                label='Alert message'
                name='alertmessage'
                value={values.alertmessage}
                onChange={handleInputChange}
                error={errors.alertName}
              />
            </Grid>
          </Grid>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className={classes.tabs}>
                <Box border={1} {...defaultP}>
                  <div
                    className={classes.Breadcrumbs}
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography color='textPrimary'>Path : </Typography>
                    <Typography noWrap>&nbsp;</Typography>
                    <Breadcrumbs
                      separator={<NavigateNextIcon fontSize='small' />}
                      aria-label='breadcrumb'
                    >
                      {schema.map((schema) => (
                        <Typography color='textPrimary'> {schema}</Typography>
                      ))}
                    </Breadcrumbs>
                  </div>

                  <AppBar position='static' color='default' elevation={0}>
                    <Tabs
                      value={valuetab}
                      onChange={handleChangeTab}
                      variant='scrollable'
                      scrollButtons='on'
                      indicatorColor='primary'
                      textColor='primary'
                      aria-label='scrollable force tabs example'
                    >
                      {layerList.cardsLayers.map((cardsLayers) => {
                        return (
                          <Tab
                            label={cardsLayers.name}
                            {...a11yProps(0)}
                            icon={<Icon>{cardsLayers.icon}</Icon>}
                            onClick={() => handelClick3(cardsLayers)}
                          />
                        );
                      })}
                    </Tabs>
                  </AppBar>
                  {layerList.cardsLayers.map((cardsLayers) => {
                    return (
                      <TabPanel valuetab={valuetab} index={cardsLayers.order}>
                        <Grid container spacing={3}>
                          {cardList2.map((cards) => {
                            if (
                              (cards.parent === null &&
                                cardsLayers.order === 0) ||
                              (cardsLayers.order === 1 && cards.level === 1)
                            )
                              return cards.entities.map(
                                (entities) => (
                                  console.log('entities', entities),
                                  console.log('dddd', cards),
                                  (
                                    <Grid item xs>
                                      <Paper elevation={0}>
                                        <Card className={classes.root}>
                                          <CardHeader
                                            action={
                                              <Box
                                                display='flex'
                                                justifyContent='flex-start'
                                                borderRadius={16}
                                                {...defaultProps}
                                                alignItems='center'
                                              >
                                                <Box
                                                  display='flex'
                                                  borderRadius={16}
                                                  justifyContent='center'
                                                  {...defaultProps2}
                                                  alignItems='center'
                                                >
                                                  <Typography
                                                    style={{
                                                      color: 'white',

                                                      borderRadius: 20
                                                    }}
                                                  >
                                                    N
                                                  </Typography>
                                                </Box>
                                                <Typography noWrap>
                                                  &nbsp;
                                                </Typography>
                                                <Typography
                                                  style={{
                                                    borderRadius: 20
                                                  }}
                                                >
                                                  0
                                                </Typography>
                                              </Box>
                                            }
                                            title={cards.title}
                                          />

                                          <CardContent
                                            className={classes.cardContent}
                                          >
                                            {cards.entities.map(
                                              (entities) => (
                                                console.log(
                                                  'entities2',
                                                  entities
                                                ),
                                                console.log('dddd2', cards),
                                                (
                                                  <Grid>
                                                    <Listt
                                                      name={entities.name}
                                                      badgeContent={
                                                        entities.contentsNumber
                                                      }
                                                      onClick={() =>
                                                        generCard(entities)
                                                      }
                                                      type={entities.type}
                                                      subType={entities.subType}
                                                    ></Listt>
                                                  </Grid>
                                                )
                                              )
                                            )}
                                          </CardContent>
                                        </Card>
                                      </Paper>
                                    </Grid>
                                  )
                                )
                              );
                            if (
                              NextCard === true &&
                              cards._id === cardList[0].cardDestination
                            )
                              return (
                                <Grid item xs>
                                  <Paper elevation={0}>
                                    <Card className={classes.root}>
                                      <CardHeader
                                        action={
                                          <Box
                                            display='flex'
                                            justifyContent='flex-start'
                                            borderRadius={16}
                                            {...defaultProps}
                                            alignItems='center'
                                          >
                                            <Box
                                              display='flex'
                                              borderRadius={16}
                                              justifyContent='center'
                                              {...defaultProps2}
                                              alignItems='center'
                                            >
                                              <Typography
                                                style={{
                                                  color: 'white',

                                                  borderRadius: 20
                                                }}
                                              >
                                                N
                                              </Typography>
                                            </Box>
                                            <Typography noWrap>
                                              &nbsp;
                                            </Typography>
                                            <Typography
                                              style={{
                                                borderRadius: 20
                                              }}
                                            >
                                              1
                                            </Typography>
                                          </Box>
                                        }
                                        title={cards.title}
                                      />

                                      <CardContent
                                        className={classes.cardContent}
                                      >
                                        {cards.entities.map((entities) => (
                                          <Grid>
                                            <Listt
                                              name={entities.name}
                                              badgeContent={
                                                entities.contentsNumber
                                              }
                                              onClick={() =>
                                                generCard2(entities)
                                              }
                                              type={entities.type}
                                              subType={entities.subType}
                                            ></Listt>
                                          </Grid>
                                        ))}
                                      </CardContent>
                                    </Card>
                                  </Paper>
                                </Grid>
                              );

                            const i = cardList.length;
                            if (
                              cardList.length >= 2 &&
                              cards._id === cardList[i - 1].cardDestination
                            )
                              return (
                                <Grid item xs>
                                  <Paper elevation={0}>
                                    <Card className={classes.root}>
                                      <CardHeader
                                        action={
                                          <Box
                                            display='flex'
                                            justifyContent='flex-start'
                                            borderRadius={16}
                                            {...defaultProps}
                                            alignItems='center'
                                          >
                                            <Box
                                              display='flex'
                                              borderRadius={16}
                                              justifyContent='center'
                                              {...defaultProps2}
                                              alignItems='center'
                                            >
                                              <Typography
                                                style={{
                                                  color: 'white',

                                                  borderRadius: 20
                                                }}
                                              >
                                                N
                                              </Typography>
                                            </Box>
                                            <Typography noWrap>
                                              &nbsp;
                                            </Typography>
                                            <Typography
                                              style={{
                                                borderRadius: 20
                                              }}
                                            >
                                              2
                                            </Typography>
                                          </Box>
                                        }
                                        title={cards.title}
                                      />

                                      <CardContent
                                        className={classes.cardContent}
                                      >
                                        {cards.entities.map((entities) => (
                                          <Grid>
                                            <Listt
                                              name={entities.name}
                                              badgeContent={
                                                entities.contentsNumber
                                              }
                                              onClick={() =>
                                                generCard3(entities)
                                              }
                                              type={entities.type}
                                              subType={entities.subType}
                                            ></Listt>
                                          </Grid>
                                        ))}
                                      </CardContent>
                                    </Card>
                                  </Paper>
                                </Grid>
                              );
                          })}
                        </Grid>

                        <Grid>
                          <Box
                            m={1}
                            pt={2}
                            display='flex'
                            justifyContent='flex-end'
                          >
                            {cardList.length === 3 ? (
                              <Controls.Button
                                text={'Confirm ' + cardList[2].name}
                                onClick={handelClick}
                              ></Controls.Button>
                            ) : (
                              <Controls.Button
                                disabled
                                text={'Confirm'}
                              ></Controls.Button>
                            )}
                          </Box>
                          <Grid container spacing={3}>
                            {confirm === true ? (
                              <Grid item xs>
                                <Paper elevation={0}>
                                  <Card className={classes.root}>
                                    <CardHeader
                                      action={
                                        <Box
                                          display='flex'
                                          justifyContent='flex-start'
                                          borderRadius={16}
                                          {...defaultProps}
                                          alignItems='center'
                                        >
                                          <Box
                                            display='flex'
                                            borderRadius={16}
                                            justifyContent='center'
                                            {...defaultProps2}
                                            alignItems='center'
                                          >
                                            <Typography
                                              style={{
                                                color: 'white',

                                                borderRadius: 20
                                              }}
                                            >
                                              N
                                            </Typography>
                                          </Box>
                                          <Typography noWrap>&nbsp;</Typography>
                                          <Typography
                                            style={{
                                              borderRadius: 20
                                            }}
                                          >
                                            3
                                          </Typography>
                                        </Box>
                                      }
                                      title={cardList[2].name}
                                    />

                                    <CardContent
                                      className={classes.cardContent}
                                    >
                                      {vector.vector1.map((vector) => {
                                        if (
                                          // NextCard3 === true &&
                                          cardList.length >= 3 &&
                                          cardList[2].deviceId._id ===
                                            vector.device
                                          // cardList[0].deviceId._id ===
                                          //   vector.device
                                        )
                                          return (
                                            <Grid>
                                              <Listt
                                                name={vector.name}
                                                badgeContent={
                                                  vector.variables.length
                                                }
                                                onClick={() =>
                                                  generCard4(vector)
                                                }
                                                type={vector.dDevTable}
                                              ></Listt>
                                            </Grid>
                                          );
                                      })}
                                    </CardContent>
                                  </Card>
                                </Paper>
                              </Grid>
                            ) : (
                              <Box></Box>
                            )}

                            {vecteurList.map((vecteurList) => {
                              if (NextCard4 === true)
                                return (
                                  <Grid item xs>
                                    <Paper elevation={0}>
                                      <Card className={classes.root}>
                                        <CardHeader
                                          action={
                                            <Box
                                              display='flex'
                                              justifyContent='flex-start'
                                              borderRadius={16}
                                              {...defaultProps}
                                              alignItems='center'
                                            >
                                              <Box
                                                display='flex'
                                                borderRadius={16}
                                                justifyContent='center'
                                                {...defaultProps2}
                                                alignItems='center'
                                              >
                                                <Typography
                                                  style={{
                                                    color: 'white',

                                                    borderRadius: 20
                                                  }}
                                                >
                                                  N
                                                </Typography>
                                              </Box>
                                              <Typography noWrap>
                                                &nbsp;
                                              </Typography>
                                              <Typography
                                                style={{
                                                  borderRadius: 20
                                                }}
                                              >
                                                4
                                              </Typography>
                                            </Box>
                                          }
                                          title={vecteurList.name}
                                        />

                                        <CardContent
                                          className={classes.cardContent}
                                        >
                                          {variable.variable1.map(
                                            (variable1) => (
                                              console.log(
                                                'variable1',
                                                variable1
                                              ),
                                              (
                                                <Grid>
                                                  <Listt
                                                    name={variable1.name}
                                                    onClick={() =>
                                                      generCard5(variable1)
                                                    }
                                                  ></Listt>
                                                </Grid>
                                              )
                                            )
                                          )}
                                        </CardContent>
                                      </Card>
                                    </Paper>
                                  </Grid>
                                );
                            })}
                          </Grid>

                          <Box
                            m={1}
                            pt={2}
                            display='flex'
                            justifyContent='flex-end'
                          >
                            {variableList.length === 1 || variableList != '' ? (
                              <Controls.Button
                                onClick={handelConfirm}
                                text={'Confirm ' + variableList.name}
                              ></Controls.Button>
                            ) : (
                              <Box></Box>
                            )}
                          </Box>
                        </Grid>
                      </TabPanel>
                    );
                  })}
                </Box>
              </div>
            </Grid>
          </Grid>
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* <CardsPage></CardsPage> */}
        </Grid>{' '}
        <Notification notify={notify} setNotify={setNotify} />
        <Grid>
          <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
            Alert rule
          </Typography>

          <Grid>
            <Grid item xs>
              {values.alertType === 'NormalAlert' ? (
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {confirmVariable === true ? (
                    <Typography className={classes.text}>
                      {variableList.name}
                    </Typography>
                  ) : (
                    <Typography className={classes.text}> Variable </Typography>
                  )}
                  <Controls.Select
                    disable={disableInput}
                    name='operation'
                    label='Operation'
                    size='small'
                    value={values.operation}
                    onChange={handleInputChange}
                    options={alertService.getOperation()}
                  />
                  <FormControl
                    size='small'
                    variant='outlined'
                    className={classes.formControl2}
                  >
                    <Controls.Input
                      disable={disableInput}
                      className={classes.number}
                      size='small'
                      name='percentage'
                      label='%'
                      type='number'
                      value={values.percentage}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          max: 100,
                          min: 0
                        }
                      }}
                    />
                  </FormControl>
                  <Typography>For</Typography>
                  <Controls.Input
                    disable={disableInput}
                    size='small'
                    name='days'
                    id='standard-number'
                    label='Select days'
                    type='number'
                    value={values.days}
                    onChange={handleInputChange}
                    InputProps={{
                      inputProps: {
                        min: 0
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <CalendarTodayIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  <Controls.Input
                    disable={disableInput}
                    size='small'
                    name='hours'
                    label='Select hours'
                    type='number'
                    value={values.hours}
                    onChange={handleInputChange}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 23
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <HourglassEmptyIcon />
                        </InputAdornment>
                      )
                    }}
                  />{' '}
                  <Controls.Input
                    disable={disableInput}
                    size='small'
                    name='minute'
                    label='Select minute'
                    type='number'
                    value={values.minute}
                    onChange={handleInputChange}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 59
                      },
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AvTimerIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
              ) : (
                <Grid>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {confirmVariable === true ? (
                      <Typography className={classes.text}>
                        {variableList.name}
                      </Typography>
                    ) : (
                      <Typography className={classes.text}>
                        {' '}
                        Variable{' '}
                      </Typography>
                    )}

                    <FormControl
                      size='small'
                      variant='outlined'
                      className={classes.formControl2}
                    >
                      <Controls.Input
                        disable={disableInput}
                        className={classes.number}
                        size='small'
                        name='percentageMin'
                        id='standard-number2'
                        label='Min'
                        type='number'
                        value={values.percentageMin}
                        onChange={handleInputChange}
                        InputProps={{
                          inputProps: {
                            max: 100,
                            min: 0
                          }
                        }}
                      />
                    </FormControl>

                    <Typography> and </Typography>
                    <FormControl
                      size='small'
                      variant='outlined'
                      className={classes.formControl2}
                    >
                      <Controls.Input
                        disable={disableInput}
                        className={classes.number}
                        size='small'
                        name='percentageMax'
                        id='standard-number2'
                        label='Max'
                        type='number'
                        value={values.percentageMax}
                        onChange={handleInputChange}
                        InputProps={{
                          inputProps: {
                            max: 100,
                            min: 0
                          }
                        }}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography className={classes.text}>Minimum </Typography>
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='daysMin'
                      id='standard-number'
                      label='Select days'
                      type='number'
                      value={values.daysMin}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CalendarTodayIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='hoursMin'
                      label='Select hours'
                      type='number'
                      value={values.hoursMin}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0,
                          max: 23
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <HourglassEmptyIcon />
                          </InputAdornment>
                        )
                      }}
                    />{' '}
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='minuteMin'
                      label='Select minute'
                      type='number'
                      value={values.minuteMin}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0,
                          max: 59
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AvTimerIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography className={classes.text}>Maximum </Typography>
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='daysMax'
                      id='standard-number'
                      label='Select days'
                      type='number'
                      value={values.daysMax}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CalendarTodayIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='hoursMax'
                      label='Select hours'
                      type='number'
                      value={values.hoursMax}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0,
                          max: 23
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <HourglassEmptyIcon />
                          </InputAdornment>
                        )
                      }}
                    />{' '}
                    <Controls.Input
                      disable={disableInput}
                      size='small'
                      name='minuteMax'
                      label='Select minute'
                      type='number'
                      value={values.minuteMax}
                      onChange={handleInputChange}
                      InputProps={{
                        inputProps: {
                          min: 0,
                          max: 59
                        },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AvTimerIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {values.alertType === 'NormalAlert' ? (
        <Grid container direction='column' alignItems='center' justify='center'>
          <Box border={1} {...defaultP2}>
            <Alert severity='info'>
              <AlertTitle>Review</AlertTitle>
              <strong>IF {selectedVariable} </strong> is{' '}
              <strong> {values.operation}</strong> then
              <strong> {values.percentage}</strong>{' '}
              <strong> FOR {values.days} </strong>days and{' '}
              <strong>{values.hours} </strong>
              hours and <strong>{values.minute} </strong>minutes{' '}
              <strong>THEN </strong> trigger the alert.
            </Alert>
          </Box>
        </Grid>
      ) : (
        <Grid container direction='column' alignItems='center' justify='center'>
          <Box border={1} {...defaultP2}>
            <Alert severity='info'>
              <AlertTitle>Review</AlertTitle>
              <strong>IF {selectedVariable} </strong> is between{' '}
              <strong>{values.percentageMin}</strong> and{' '}
              <strong>{values.percentageMax}</strong> and the maximum value
              maintain for <strong> {values.daysMax}</strong> days and{' '}
              <strong>{values.hoursMax}</strong> hours and{' '}
              <strong>{values.minuteMax}</strong> minute OR the minimum value
              maintain for <strong>{values.daysMin}</strong> days and{' '}
              <strong>{values.hoursMin}</strong> hours and{' '}
              <strong>{values.minuteMin}</strong> minute &nbsp;{' '}
              <strong>THEN</strong> &nbsp; trigger the alert.
            </Alert>
          </Box>
        </Grid>
      )}
      <Grid container justify='flex-start'>
        <div className={classes.buttons}>
          <Controls.Button type='submit' text='Submit' onClick={submit} />
          <Controls.Button text='Reset' color='default' onClick={resetForm} />
        </div>
      </Grid>
    </Form>
  );
}

const mapStateToProps = (state) => {
  const alertReducer = 'alert';
  console.log('alertre', state[alertReducer].cards);
  return {
    cards: state[alertReducer].cards
  };
};
const mapDispatchToProps = (dispatch) => ({
  addAlertName: (name) => dispatch(addAlert(name)),
  getCardName: () => dispatch(getCard()),
  updateAlertInfo: (alert) => dispatch(updateAlert(alert))
});
export default connect(mapStateToProps, mapDispatchToProps)(AlertForm);
