import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Badge from '@material-ui/core/Badge';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 200
  },
  list: {
    // width: '100%',
    // maxWidth: 300,
    // backgroundColor: theme.palette.background.paper
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 100
  }
}));

export default function Cards(props) {
  const classes = useStyles();
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
  const { cardNumber, title, name, onClick, badgeContent } = props;
  return (
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
              {cardNumber}
            </Typography>
          </Box>
        }
        title={title}
      />

      <CardContent>
        <List
          component='nav'
          className={classes.list}
          aria-label='mailbox folders'
        >
          <ListItem button onClick={onClick} dense='1'>
            <ListItemSecondaryAction>
              <IconButton edge='end'>
                <Badge badgeContent={badgeContent} color='primary'>
                  <ApartmentIcon
                    style={{
                      color: '#C42914'
                    }}
                  />
                </Badge>
              </IconButton>
            </ListItemSecondaryAction>
            <ListItemText primary={name} />
          </ListItem>

          <Divider />
        </List>
      </CardContent>
    </Card>
  );
}
