import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles
} from '@material-ui/core';
import Controls from './controls/Controls';
import { deleteAlert } from '../redux/actions/alertActions';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },

  DialogContent: {
    textAlign: 'center'
  },
  DialogActions: {
    justifyContent: 'center'
  }
}));

function ConfirmDelete(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.DialogContent}>
        {' '}
        <HighlightOffIcon style={{ fontSize: 150 }} color='secondary' />
      </DialogTitle>
      <DialogContent className={classes.DialogContent}>
        <Typography variant='h6'>{confirmDialog.title}</Typography>
        <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
        <Typography variant='subtitle2'>
          Alert Name : {confirmDialog.name}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.DialogActions}>
        <Controls.Button
          text='No'
          color='primary'
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        />
        <Controls.Button
          text='Yes'
          color='Secondary'
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
}
const mapStateToProps = (state) => {
  const alertReducer = 'alert';
  return {
    alerts: state[alertReducer].alerts
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteAlertByid: (id) => dispatch(deleteAlert(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDelete);
