import axios from '../../axios-instance';

import * as types from '../constants/alertConstante';

export const addAlertStart = () => {
  return { type: types.ADD_ALERT_START };
};
export const addAlertSuccess = (newAlert) => {
  return { type: types.ADD_ALERT_SUCCESS, newAlert };
};
export const addAlertFailed = () => {
  return { type: types.ADD_ALERT_FAILED };
};

export const deleteAlertStart = () => {
  return { type: types.DELETE_ALERT_START };
};
export const deleteAlertSuccess = (deletedAlert) => {
  // console.log('deletedAlert', deletedAlert);
  return { type: types.DELETE_ALERT_SUCCESS, deletedAlert };
};
export const deleteAlertFailed = () => {
  return { type: types.DELETE_ALERT_FAILED };
};

export const getAlertStart = () => {
  return { type: types.GET_ALERT_START };
};
export const getAlertSuccess = (allAlert) => {
  console.log('allAlert', allAlert);
  return { type: types.GET_ALERT_SUCCESS, allAlert };
};
export const getAlertFailed = () => {
  return { type: types.GET_ALERT_FAILED };
};

export const updateAlertStart = () => {
  return { type: types.UPDATE_ALERT_START };
};
export const updateAlertSuccess = (updatedAlert) => {
  return { type: types.UPDATE_ALERT_SUCCESS, updatedAlert };
};
export const updateAlertFailed = () => {
  return { type: types.UPDATE_ALERT_FAILED };
};

export const getAlert = () => async (dispatch) => {
  try {
    dispatch(getAlertStart());
    axios.get('/api/alert/get-alert').then((res) => {
      console.log('getTest', res.data.Alerts);

      dispatch(getAlertSuccess(res.data.Alerts));
    });
  } catch (error) {
    dispatch(getAlertFailed());
  }
};
export const addAlert = (alert) => async (dispatch) => {
  console.log('test2', alert);
  var today = new Date();

  var date =
    today.getDate() +
    '/' +
    (today.getMonth() + 1) +
    '/' +
    today.getFullYear() +
    ' ' +
    today.getHours() +
    ':' +
    today.getMinutes();
  try {
    dispatch(addAlertStart());
    axios
      .post('/api/alert/add', {
        company: '625d4aad07243454b2470c65',
        alertName: alert.alertName,
        // email: alert.email,
        // mobile: alert.mobile,
        alertmessage: alert.alertmessage,
        variable: alert.variable,
        path: alert.path,
        alertType: alert.alertType,
        days: alert.days,
        daysMax: alert.daysMax,
        daysMin: alert.daysMin,
        hours: alert.hours,
        hoursMax: alert.hoursMax,
        hoursMin: alert.hoursMin,
        minute: alert.minute,
        minuteMax: alert.minuteMax,
        minuteMin: alert.minuteMin,
        percentage: alert.percentage,
        percentageMax: alert.percentageMax,
        percentageMin: alert.percentageMin,
        // metric: alert.Metrics,
        // subMetric: alert.subMetrics,
        operation: alert.operation,
        date: date,
        // percentage: alert.percentage,
        // time: alert.time,
        status: 'Online'
      })

      .then((res) => {
        console.log('test', res);
        dispatch(addAlertSuccess(res.newAlert));
        console.log('test3', res.newAlert);
      });
  } catch (error) {
    dispatch(addAlertFailed());
  }
};

export const deleteAlert = (id) => async (dispatch) => {
  console.log('id', id);
  try {
    dispatch(deleteAlertStart());
    axios.delete('/api/alert/delete-alert/' + id).then((res) => {
      console.log('delete', res.data);
      dispatch(deleteAlertSuccess(res.data));
    });
  } catch (error) {
    dispatch(deleteAlertFailed());
  }
};

export const updateAlert = (alert) => async (dispatch) => {
  console.log('updated Alert', alert);
  var today = new Date();

  var date =
    today.getDate() +
    '/' +
    (today.getMonth() + 1) +
    '/' +
    today.getFullYear() +
    ' ' +
    today.getHours() +
    ':' +
    today.getMinutes();
  try {
    dispatch(updateAlertStart());
    axios
      .post('api/alert/edit-alert', {
        aId: alert._id,
        alertName: alert.alertName,
        // email: alert.email,
        // mobile: alert.mobile,
        alertmessage: alert.alertmessage,
        variable: alert.variable,
        schema: alert.schema,
        alertType: alert.alertType,
        days: alert.days,
        daysMax: alert.daysMax,
        daysMin: alert.daysMin,
        hours: alert.hours,
        hoursMax: alert.hoursMax,
        hoursMin: alert.hoursMin,
        minute: alert.minute,
        minuteMax: alert.minuteMax,
        minuteMin: alert.minuteMin,
        percentage: alert.percentage,
        percentageMax: alert.percentageMax,
        percentageMin: alert.percentageMin,
        // metric: alert.Metrics,
        // subMetric: alert.subMetrics,
        operation: alert.operation,
        date: date
      })

      .then((res) => {
        console.log('resultat', res);
        dispatch(updateAlertSuccess(res.data.result));
      });
  } catch (error) {
    dispatch(updateAlertFailed());
  }
};

export const getCardStart = () => {
  return { type: types.GET_CARD_START };
};

export const getCardSuccess = (allCard) => {
  console.log('allCard', allCard);
  return { type: types.GET_CARD_SUCCESS, allCard };
};
export const getCardFailed = () => {
  return { type: types.GET_CARD_FAILED };
};

export const getCard = () => async (dispatch) => {
  try {
    dispatch(getCardStart());
    axios.get('/api/card/get-card').then((res) => {
      console.log('getCard', res.data.Cards);
      dispatch(getCardSuccess(res.data.Cards));
    });
  } catch (error) {
    dispatch(getCardFailed());
  }
};
