import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MemoryIcon from '@material-ui/icons/Memory';
import Badge from '@material-ui/core/Badge';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ApartmentIcon from '@material-ui/icons/Apartment';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 20
  }
}));

export default function Listt(props) {
  const classes = useStyles();

  const { name, onClick, badgeContent, type, subType } = props;
  let icon = {};
  if (type === 'LOCAL') {
    icon = (
      <ApartmentIcon
        style={{
          color: '#C42914'
        }}
      ></ApartmentIcon>
    );
  } else if (type === 'DEVICE' && subType === 'REAL_MACHINE') {
    icon = (
      <MemoryIcon
        style={{
          color: '#C42914'
        }}
      ></MemoryIcon>
    );
  } else if (type === 'DEVICE' && subType === 'VIRTUAL_MACHINE') {
    icon = (
      <CloudDownloadOutlinedIcon
        style={{
          color: '#C42914'
        }}
      ></CloudDownloadOutlinedIcon>
    );
  } else {
    icon = (
      <MemoryIcon
        style={{
          color: '#C42914'
        }}
      ></MemoryIcon>
    );
  }

  return (
    <List
      component='nav'
      // style={{ maxHeight: '100%', overflow: 'auto' }}
      // className={classes.list}
      aria-label='mailbox folders'
      // className={classes.list}
    >
      <ListItem button onClick={onClick} dense='1'>
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <Badge badgeContent={badgeContent} color='primary'>
              {/* <MemoryIcon
                style={{
                  color: '#C42914'
                }}
              /> */}

              {/* {() => {
                if (type === 'LOCAL') {
                  icon = (
                    <ApartmentIcon
                      style={{
                        color: '#C42914'
                      }}
                    ></ApartmentIcon>
                  );
                } else if (
                  type === 'REAL_MACHINE' ||
                  subType === 'REAL_MACHINE'
                ) {
                  icon = (
                    <MemoryIcon
                      style={{
                        color: '#C42914'
                      }}
                    ></MemoryIcon>
                  );
                } else if (
                  type === 'VIRTUAL_MACHINE' ||
                  subType === 'VIRTUAL_MACHINE'
                ) {
                  icon = (
                    <CloudDownloadOutlinedIcon
                      style={{
                        color: '#C42914'
                      }}
                    ></CloudDownloadOutlinedIcon>
                  );
                }
              }} */}
              {icon}
            </Badge>
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText primary={name} />
      </ListItem>

      <Divider />
    </List>
  );
}
