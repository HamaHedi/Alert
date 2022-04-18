const KEYS = {
  alerts: 'alerts',
  alertId: 'alertId'
};

export const getMetricCollection = () => [
  { id: 'Electricity', title: 'Electricity' },
  { id: 'Waterflux', title: 'Water flux' },
  { id: 'Gaz', title: 'Gaz' },
  { id: 'Temperature', title: 'Temperature' }
];
export const getSubMetricCollection = () => [
  { id: 'exmp1', title: 'exmp1' },
  { id: 'exmp2', title: 'exmp2' },
  { id: 'exmp3', title: 'exmp3' },
  { id: 'exmp4', title: 'exmp4' }
];
export const getOperation = () => [
  { id: '>', title: '>' },
  { id: '<', title: '<' },
  { id: '>=', title: '>=' },
  { id: '<=', title: '<=' },
  { id: '=', title: '=' }
];
export const getTime = () => [
  { id: '5min', title: '5min' },
  { id: '10min', title: '10min' },
  { id: '15min', title: '15min' },
  { id: '30min', title: '30min' },
  { id: '45min', title: '45min' }
];
export const getStatus = () => [
  { id: 'Active', title: 'Active' },
  { id: 'desactive', title: 'desactive' }
];
export function insertAlert(data) {
  let alerts = getAllAlert();
  data['id'] = generateAlertId();
  alerts.push(data);
  localStorage.setItem(KEYS.alerts, JSON.stringify(alerts));
}

export function updateAlert(data) {
  let alerts = getAllAlert();
  let recordIndex = alerts.findIndex((x) => x.id == data.id);
  alerts[recordIndex] = { ...data };
  localStorage.setItem(KEYS.alerts, JSON.stringify(alerts));
}
export function deleteAlert(id) {
  let alerts = getAllAlert();
  alerts = alerts.filter((x) => x.id != id);
  localStorage.setItem(KEYS.alerts, JSON.stringify(alerts));
}
export function generateAlertId() {
  if (localStorage.getItem(KEYS.alertId) == null)
    localStorage.setItem(KEYS.alertId, '0');
  var id = parseInt(localStorage.getItem(KEYS.alertId));
  localStorage.setItem(KEYS.alertId, (++id).toString());
  return id;
}

export function getAllAlert() {
  if (localStorage.getItem(KEYS.alerts) == null)
    localStorage.setItem(KEYS.alerts, JSON.stringify([]));
  let alerts = JSON.parse(localStorage.getItem(KEYS.alerts));

  ////////////////////
  let metric = getMetricCollection();
  return alerts.map((x) => ({
    ...x,
    department: metric[x.Metrics - 1]
  }));
}
