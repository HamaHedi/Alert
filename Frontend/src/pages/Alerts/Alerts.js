import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import {
  Paper,
  makeStyles,
  Toolbar,
  Typography,
  Grid
} from '@material-ui/core';
import * as alertService from '../../services/alertService';
import Controls from '../../components/controls/Controls';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';
import Notification from '../../components/Notification';
import ConfirmDelete from '../../components/ConfirmDelete';
import AlertForm from './AlertForm';
import {
  getAlert,
  deleteAlert,
  updateAlert
} from '../../redux/actions/alertActions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import MaterialTable from 'material-table';
import MTable from './historyLog';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Status, Status2, Status3 } from '../../components/Status';
import StatusForm from './StatusForm';
import Box from '@material-ui/core/Box';
import FormNotif from './ManageNotification';
import Divider from '@material-ui/core/Divider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  },
  newButton: {
    position: 'absolute',
    right: '10px'
  },
  button: {
    height: 40
  },

  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  paper2: {
    margin: theme.spacing(2),
    padding: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2)
  }
}));

function Alerts(props) {
  const columns = [
    {
      title: 'Schema',
      align: 'center',

      sorting: true,
      filtering: true,
      headerStyle: { color: '#fff' },
      render: (rowData) => (
        console.log('rowData', rowData),
        (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            maxItems={2}
            aria-label='breadcrumb'
          >
            {rowData.schema.map((schema) => (
              <Typography>{schema}</Typography>
            ))}
          </Breadcrumbs>
        )
      )
    },

    {
      title: 'Alert Name',
      field: 'alertName',
      align: 'center',
      filterPlaceholder: 'filter',
      sorting: true,
      filtering: true,
      headerStyle: { color: '#fff' }
    },

    {
      title: 'Variable',
      field: 'variable',
      align: 'center',
      filterPlaceholder: 'filter',
      sorting: true,
      filtering: true
    },
    {
      title: 'Creation Date',
      field: 'date',
      align: 'center',
      filterPlaceholder: 'filter',
      sorting: true,
      filtering: true
    },

    {
      title: 'Status',
      field: 'status',
      filterPlaceholder: 'filter',
      render: (rowData) => (
        <div>
          {(() => {
            if (rowData.status == 'Disabled') {
              return (
                <div>
                  <Status3
                    onClick={() => {
                      setOpenStatusPopup(true);
                    }}
                  ></Status3>
                </div>
              );
            } else if (rowData.status == 'Online') {
              return (
                <div>
                  <Status
                    onClick={() => {
                      setOpenStatusPopup(true);
                    }}
                  ></Status>
                </div>
              );
            } else {
              return (
                <div>
                  <Status2
                    onClick={() => {
                      setOpenStatusPopup(true);
                    }}
                  ></Status2>
                </div>
              );
            }
          })()}
        </div>
      )
    }
  ];

  /////////////////////////////////////////////////////////////////////////

  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openStatusPopup, setOpenStatusPopup] = useState(false);
  const [openNotificationPopup, setOpenNotificationPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  console.log('recordForEdit', recordForEdit);
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: ''
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: ''
  });

  const addOrEdit = (rowData, resetForm) => {
    if (rowData._id == 0) alertService.insertAlert(rowData);
    else alertService.updateAlert(rowData);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setNotify({
      isOpen: true,
      message: 'Alert Created Successfully'
    });
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    });
    alertService.deleteAlert(id);

    setNotify({
      isOpen: true,
      message: 'Alert Deleted Successfully ',
      type: 'error'
    });
  };

  const updat = (alert) => {
    console.log('updatedAlert', alert);
    props.updateAlertInfo(alert);
  };

  const delett = (id) => {
    console.log('id2', id);
    props.deleteAlerts(id);
    setConfirmDialog({
      isOpen: false
    });

    setNotify({
      isOpen: true,
      message: 'Alert Deleted Successfully ',
      type: 'error'
    });
  };
  const [submit, setSubmit] = useState(false);
  const submited = (e) => {
    console.log('eee', e);
    setSubmit(e);
  };

  const { getAlertName, alerts } = props;
  let allAlerts = alerts;
  const [allAlert, setAllalert] = useState(allAlerts);
  useEffect(() => {
    setAllalert(allAlerts);
  }, [allAlerts]);

  console.log('allAlert', alerts);
  console.log('allAlert2', allAlert);

  useEffect(() => {
    getAlertName();
    setSubmit(false);
    console.log('submit', submit);
  }, [submit]);

  return (
    <>
      <PageHeader
        title='Alert'
        subTitle='Alert Creation'
        icon={<NotificationImportantOutlinedIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        <Box>
          <Toolbar>
            <Controls.Button
              text='Add New'
              variant='outlined'
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </Toolbar>

          <MaterialTable
            columns={columns}
            data={alerts}
            detailPanel={[
              {
                tooltip: 'Show Name',
                render: (rowData) => {
                  return (
                    <Grid>
                      {rowData.AlertType === 'NormalAlert' ? (
                        <Paper className={classes.paper2}>
                          <Typography
                            variant='h6'
                            component='div'
                            style={{ flexGrow: 1 }}
                          >
                            Alert Details
                          </Typography>
                          <Divider className={classes.divider} />
                          <Grid className={classes.paper2}>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Alert Type : Normal Alert
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Alert Message : {rowData.Alertmessage}
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Trigger Rule :{' '}
                              <strong>{rowData.variable} </strong>Is{' '}
                              <strong>{rowData.operation}</strong> than{' '}
                              <strong> {rowData.percentage}</strong> For{' '}
                              <strong> {rowData.days}</strong> days and{' '}
                              <strong>{rowData.hours} </strong> hours and{' '}
                              <strong>{rowData.minute}</strong> minute
                            </Typography>
                          </Grid>
                        </Paper>
                      ) : (
                        <Paper className={classes.paper2}>
                          <Typography
                            variant='h6'
                            component='div'
                            style={{ flexGrow: 1 }}
                          >
                            Alert Details
                          </Typography>
                          <Divider className={classes.divider} />
                          <Grid className={classes.paper2}>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Alert Type : Double Thresholds
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Alert Message :{rowData.Alertmessage}
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Trigger Rule :{' '}
                              <strong>{rowData.variable} </strong>Between{' '}
                              <strong>{rowData.percentageMin}</strong> &nbsp;
                              and
                              <strong> {rowData.percentageMax}</strong>
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Minimum Value : For &nbsp;
                              <strong>{rowData.daysMin} </strong> days and&nbsp;
                              <strong>{rowData.hoursMin}</strong> &nbsp; hours
                              and
                              <strong> {rowData.minuteMin}</strong> minites
                            </Typography>
                            <Typography component='div' style={{ flexGrow: 1 }}>
                              Minimum Value : For &nbsp;
                              <strong>{rowData.daysMax} </strong> days and
                              &nbsp;
                              <strong>{rowData.hoursMax}</strong> &nbsp; hours
                              and
                              <strong> {rowData.minuteMax}</strong> minites
                            </Typography>
                          </Grid>
                        </Paper>
                      )}
                    </Grid>
                  );
                }
              }
            ]}
            // editable={{
            //   onRowUpdate: (updatedRow, oldRow) =>
            //     new Promise((resolve, reject) => {
            //       console.log('updatedRow', updatedRow);
            //       updat(updatedRow);

            //       setTimeout(() => {
            //         resolve();
            //       }, 2000);
            //     }),

            //   onRowDelete: (selectedRow) =>
            //     new Promise((resolve, reject) => {
            //       delett(selectedRow._id);
            //       console.log('selectedId', selectedRow._id);

            //       setTimeout(() => resolve(), 1000);
            //     })
            // }}
            actions={[
              (rowData) => ({
                icon: () => <DeleteForeverIcon fontSize='medium' />,
                tooltip: 'Delete Alert',

                onClick: (event, rowData) => {
                  setConfirmDialog({
                    isOpen: true,
                    title: 'Are you sure to delete this alert ?',
                    subTitle: "You can't cancel this operation",
                    name: rowData.name,
                    onConfirm: () => delett(rowData._id)
                  });
                }
              }),

              (rowData) => ({
                icon: () => <EditOutlinedIcon fontSize='medium' />,
                tooltip: 'Edit',

                onClick: (event, rowData) => {
                  console.log('rowDaqsta', rowData);
                  openInPopup(rowData);
                }
              })
            ]}
            onSelectionChange={(selectedRows) =>
              console.log('sss', selectedRows)
            }
            onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow)}
            options={{
              sorting: true,
              search: true,
              searchFieldAlignment: 'right',
              searchAutoFocus: true,
              searchFieldVariant: 'standard',
              filtering: true,
              paging: true,
              pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
              pageSize: 5,
              paginationType: 'stepped',
              showFirstLastPageButtons: true,
              // paginationPosition: 'both',
              exportButton: true,
              exportAllData: true,
              exportFileName: 'Alerts',
              addRowPosition: 'first',
              actionsColumnIndex: -1,
              selection: false,
              showSelectAllCheckbox: false,
              showTextRowsSelected: true,
              selectionProps: (rowData) => ({
                color: 'primary'
              }),

              grouping: true,
              columnsButton: true,
              rowStyle: (data, index) =>
                index % 2 === 0 ? { background: '#f5f5f5' } : null,
              headerStyle: { background: '#3f51b5', color: '#fff' },

              rowStyle: (rowData) => ({
                backgroundColor:
                  selectedRow === rowData.tableData.id ? '#6ABAC9' : '#FFF'
              })
            }}
            title='Alert Information'
            icons={{ Add: () => <AddIcon /> }}
          />
        </Box>
      </Paper>
      <Popup
        title='Alert Form'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AlertForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          submited={submited}
        />
      </Popup>

      <Popup
        title='Manage Notification'
        openPopup={openNotificationPopup}
        setOpenPopup={setOpenNotificationPopup}
      >
        <FormNotif />
      </Popup>

      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDelete
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />

      <Paper className={classes.paper}>
        <MTable></MTable>
      </Paper>
      <Popup
        title='Status update'
        openPopup={openStatusPopup}
        setOpenPopup={setOpenStatusPopup}
      >
        <StatusForm
          AlertName={selectedRow.name}
          DefaultStatus={selectedRow.status}
        />
      </Popup>
      <Controls.Button
        variant='outlined'
        startIcon={<AddIcon />}
        className={classes.newButton}
        onClick={() => {
          setOpenNotificationPopup(true);
        }}
        text=' Add New'
      />
    </>
  );
}
const mapStateToProps = (state) => {
  const alertReducer = 'alert';
  console.log('map', state[alertReducer].alerts);

  return {
    alerts: state[alertReducer].alerts
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAlertName: () => dispatch(getAlert()),
  deleteAlerts: (id) => dispatch(deleteAlert(id)),
  updateAlertInfo: (alert) => dispatch(updateAlert(alert))
});
export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
