import * as types from '../constants/alertConstante';
import { updateObject } from '../../shared/utility';
const initialState = {
  alerts: [],
  cards: [],
  addAlertLoading: false,
  addAlertError: false,
  getAlertLoading: false,
  getAlertError: false,
  deleteAlertLoading: false,
  deleteAlertError: false,
  updateAlertLoading: false,
  updateAlertError: false,
  getCardLoading: false,
  getCardError: false
};
const addAlertStart = (state, action) => {
  return updateObject(state, { addAlertLoading: true });
};
const addAlertSuccess = (state, action) => {
  const newAlert = action.newAlert;
  const currentAlerts = state.alerts;
  const updatedAlerts = currentAlerts.concat(newAlert);
  return updateObject(state, { addAlertLoading: false, alerts: updatedAlerts });
};
const addAlertFailed = (state, action) => {
  return updateObject(state, { addAlertLoading: false, addAlertError: true });
};

const getAlertStart = (state, action) => {
  return updateObject(state, { getAlertLoading: true });
};
const getAlertSuccess = (state, action) => {
  // const allAlert = action.allAlert;
  // const currentAlerts = state.alerts;
  // const updatedAlerts = currentAlerts.concat(allAlert);
  const allAlert = action.allAlert;
  // console.log('update', updatedAlerts);

  return updateObject(state, {
    // alerts: updatedAlerts,
    alerts: allAlert,
    getAlertLoading: false
  });
};
const getAlertFailed = (state, action) => {
  return updateObject(state, { getAlertLoading: false, getAlertError: true });
};

const deleteAlertStart = (state, action) => {
  return updateObject(state, { deleteAlertLoading: true });
};
const deleteAlertSuccess = (state, action) => {
  const deletedAlert = action.deletedAlert.id;
  console.log('deleted alert', deletedAlert);

  const currentAlerts = state.alerts;
  let updatedAlerts = [];
  for (let i = 0; i < currentAlerts.length; i++) {
    if (currentAlerts[i]._id !== deletedAlert) {
      updatedAlerts.push(currentAlerts[i]);
    }
  }
  console.log('update50', updatedAlerts);
  return updateObject(state, {
    alerts: updatedAlerts,
    deleteAlertLoading: false
  });
};
const deleteAlertFailed = (state, action) => {
  return updateObject(state, {
    deleteAlertLoading: false,
    deleteAlertError: true
  });
};

const updateAlertStart = (state, action) => {
  return updateObject(state, { updateAlertLoading: true });
};
const updateAlertSuccess = (state, action) => {
  const updatedAlert = action.updatedAlert;
  console.log('action update2', action.updatedAlert);
  const currentAlerts = [];
  for (let i = 0; i < state.alerts.length; i++) {
    if (state.alerts[i]._id !== updatedAlert._id) {
      currentAlerts.push(state.alerts[i]);
    }
  }
  const updatedAlerts = currentAlerts.concat(updatedAlert);

  console.log('test update', updatedAlerts);
  return updateObject(state, { addAlertLoading: false, alerts: updatedAlerts });
};
const updateAlertFailed = (state, action) => {
  return updateObject(state, {
    updateAlertLoading: false,
    updateAlertError: true
  });
};

const getCardStart = (state, action) => {
  return updateObject(state, { getCardLoading: true });
};
const getCardSuccess = (state, action) => {
  const allCard = action.allCard;
  // const currentCards = state.cards;
  // const updatedCards = currentCards.push(allCard);
  console.log('updatess', allCard);

  return updateObject(state, {
    getCardLoading: false,
    cards: allCard
  });
};
const getCardFailed = (state, action) => {
  return updateObject(state, { getCardLoading: false, getCardError: true });
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_ALERT_START:
      return addAlertStart(state, action);
    case types.ADD_ALERT_SUCCESS:
      return addAlertSuccess(state, action);
    case types.ADD_ALERT_FAILED:
      return addAlertFailed(state, action);

    case types.DELETE_ALERT_START:
      return deleteAlertStart(state, action);
    case types.DELETE_ALERT_SUCCESS:
      return deleteAlertSuccess(state, action);
    case types.DELETE_ALERT_FAILED:
      return deleteAlertFailed(state, action);

    case types.GET_ALERT_START:
      return getAlertStart(state, action);
    case types.GET_ALERT_SUCCESS:
      return getAlertSuccess(state, action);
    case types.GET_ALERT_FAILED:
      return getAlertFailed(state, action);

    case types.UPDATE_ALERT_START:
      return updateAlertStart(state, action);
    case types.UPDATE_ALERT_SUCCESS:
      return updateAlertSuccess(state, action);
    case types.UPDATE_ALERT_FAILED:
      return updateAlertFailed(state, action);

    case types.GET_CARD_START:
      return getCardStart(state, action);
    case types.GET_CARD_SUCCESS:
      return getCardSuccess(state, action);
    case types.GET_CARD_FAILED:
      return getCardFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
