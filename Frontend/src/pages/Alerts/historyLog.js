import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TablePagination
} from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import CommentTwoToneIcon from '@material-ui/icons/CommentTwoTone';
import CommentForm from './CommentForm';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 950
  },
  tableContainer: {
    // borderRadius: 15,

    maxWidth: 1300
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#3f51b5',
    color: theme.palette.getContrastText(theme.palette.primary.dark)
  },

  name: {
    fontWeight: 'bold',
    color: '#f44336'
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  },
  popup: {
    width: 362
  },
  fullPopup: {
    width: 'auto'
  },
  root: {
    flexGrow: 1
  }
}));

let Alerts = [],
  STATUSES = ['Online', 'Offline', 'Disabled'];
for (let i = 0; i < 14; i++) {
  Alerts[i] = {
    name: 'test',
    email: 'fsdfsf',
    phone: '458485',
    jobTitle: 'dszd',
    company: 'softup',
    joinDate: '05/05/2000',
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
  };
}

function MTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const popup = (anchor) => (
    <div
      className={clsx(classes.popup, {
        [classes.fullPopup]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
    >
      <CommentForm />
    </div>
  );
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Schema</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Alert Info
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Alert Date
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Alerts.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Grid container>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{row.name}</Typography>
                    <Typography color='textSecondary' variant='body2'>
                      {row.email}
                    </Typography>
                    <Typography color='textSecondary' variant='body2'>
                      {row.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color='primary' variant='subtitle2'>
                  {row.jobTitle}
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                  {row.company}
                </Typography>
              </TableCell>
              <TableCell>{row.joinDate}</TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === 'Online' && 'green') ||
                      (row.status === 'Offline' && 'red') ||
                      (row.status === 'Disabled' && 'grey')
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>

              <TableCell>
                <div>
                  <Controls.ActionButton
                    color='primary'
                    onClick={toggleDrawer('right', true)}
                  >
                    <CommentTwoToneIcon />
                  </Controls.ActionButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component='div'
        count={Alerts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <div>
        <React.Fragment>
          <Drawer
            // PaperProps={{ style: { height: '90vh' } }}
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {popup('right')}
          </Drawer>
        </React.Fragment>
      </div>
    </TableContainer>
  );
}

export default MTable;
