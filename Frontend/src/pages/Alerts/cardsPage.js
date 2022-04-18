import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PowerIcon from '@material-ui/icons/Power';
import { makeStyles } from '@material-ui/core/styles';
import { getCard } from '../../redux/actions/alertActions';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Cards from '../../components/Card';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListIcon from '@material-ui/icons/List';
import { layerObject } from '../../components/cardData';
import Listt from '../../components/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { vecteur1, variable1 } from '../../components/cardData';
import PropTypes from 'prop-types';
import Controls from '../../components/controls/Controls';
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },

  tabs: {
    flexGrow: 1,
    width: '200%',
    backgroundColor: theme.palette.background.paper
  },
  root: {
    maxWidth: 345,

    maxHeight: 600
  },
  Breadcrumbs: {
    padding: theme.spacing(2)
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

function CardsPage(props) {
  const classes = useStyles();
  const cards = props.cards;
  console.log('caaards', cards);
  const [schema, setSchema] = useState([]);
  const [valuetab, setValueTab] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  const [vector, setVector] = useState(vecteur1);
  const [variable, setVariable] = useState(variable1);
  console.log('veteur', vector.vector1[0].device);
  console.log('var2', variable);
  const [cardList, setCardList] = useState([]);
  const [NextCard, setNextCard] = useState(false);
  useEffect(() => {
    props.getCardName();
  }, []);
  const generCard = (value) => {
    setNextCard(true);

    setCardList((cardList) => [value]);

    setSchema((schema) => [...schema, value.name]);
    if (cardList.length > 1) {
      cardList.splice(0, 5);
      schema.splice(0, 5);
      setVecteurList([]);
      setConfirm(false);
      setNextCard2(false);
      setNextCard3(false);
      setNextCard4(false);
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
      // cardList.splice(3, 5);
      // setNextCard3(false);
    }
  };
  const [confirm, setConfirm] = useState(false);
  const handelClick = () => {
    setConfirm(true);
  };
  console.log('NextCard3', NextCard3);
  console.log('vectorList', vecteurList);
  console.log('shemaLong', schema.length);
  console.log('cardList', cardList);
  const [variableList, setVariableList] = useState([]);
  const generCard5 = (value) => {
    setVariableList((variableList) => [value]);
    setSchema((schema) => [...schema, value.name]);
    if (schema.length > 4) {
      schema.splice(4, 5);
      // cardList.splice(3, 5);
      // setNextCard3(false);
    }
  };
  console.log('variableList', variableList);

  const handelClick2 = () => {
    setConfirm(true);
  };

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
  return (
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
              <Typography color='textPrimary'>Schema : </Typography>
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
                <Tab
                  label={layerObject.cardsLayers[0].name}
                  icon={<ListIcon />}
                  {...a11yProps(0)}
                />
                <Tab
                  label='Electricity'
                  icon={<PowerIcon />}
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>

            <TabPanel valuetab={valuetab} index={0}>
              <Grid container spacing={3}>
                {cards.map((cards) => {
                  if (cards.parent === null)
                    return cards.entities.map(
                      (entities) => (
                        console.log('entities', entities),
                        console.log('dddd', cards),
                        (
                          <Grid item xs>
                            <Paper elevation={0}>
                              <Cards
                                cardNumber='1'
                                title={cards.title}
                                name={entities.name}
                                badgeContent={entities.contentsNumber}
                                onClick={() => generCard(entities)}
                              ></Cards>{' '}
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
                                  <Typography noWrap>&nbsp;</Typography>
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

                            <CardContent>
                              {cards.entities.map(
                                (entities) => (
                                  console.log('entities2', entities),
                                  console.log('dddd2', cards),
                                  (
                                    <Grid>
                                      <Listt
                                        name={entities.name}
                                        badgeContent={entities.contentsNumber}
                                        onClick={() => generCard2(entities)}
                                        type={entities.type}
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
                              title={cards.title}
                            />

                            <CardContent>
                              {cards.entities.map(
                                (entities) => (
                                  console.log('entities2', entities),
                                  console.log('dddd2', cards),
                                  (
                                    <Grid>
                                      <Listt
                                        name={entities.name}
                                        badgeContent={entities.contentsNumber}
                                        onClick={() => generCard3(entities)}
                                        type={entities.subType}
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

              <Grid>
                <Box m={1} pt={2} display='flex' justifyContent='flex-end'>
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
                                  4
                                </Typography>
                              </Box>
                            }
                            title={cardList[2].name}
                          />

                          <CardContent>
                            {vector.vector1.map((vector) => {
                              if (
                                // NextCard3 === true &&
                                cardList.length >= 3 &&
                                cardList[2].deviceId._id === vector.device
                              )
                                return (
                                  <Grid>
                                    <Listt
                                      name={vector.name}
                                      badgeContent={vector.variables.length}
                                      onClick={() => generCard4(vector)}
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
                                    <Typography noWrap>&nbsp;</Typography>
                                    <Typography
                                      style={{
                                        borderRadius: 20
                                      }}
                                    >
                                      5
                                    </Typography>
                                  </Box>
                                }
                                title={vecteurList.name}
                              />

                              <CardContent>
                                {variable.variable1.map(
                                  (variable1) => (
                                    console.log('variable1', variable1),
                                    (
                                      <Grid>
                                        <Listt
                                          name={variable1.name}
                                          // badgeContent={vector.variables.length}
                                          onClick={() => generCard5(variable1)}
                                          // type={vector.dDevTable}
                                        ></Listt>
                                      </Grid>
                                    )
                                  )
                                )}
                              </CardContent>
                            </Card>
                          </Paper>

                          <Box
                            m={1}
                            pt={2}
                            display='flex'
                            justifyContent='flex-end'
                          >
                            <Controls.Button text='confirm '></Controls.Button>
                          </Box>
                        </Grid>
                      );
                  })}
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel valuetab={valuetab} index={1}>
              test
            </TabPanel>
          </Box>
        </div>
      </Grid>
    </Grid>
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
  getCardName: () => dispatch(getCard())
});
export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);
