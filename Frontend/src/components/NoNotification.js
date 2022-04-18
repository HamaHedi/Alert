import { Grid, IconButton, Badge } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2),
    color: 'grey'
  },

  grid: {
    textAlign: 'center'
  }
}));
export default function NONotification() {
  const classes = useStyles();
  return (
    <div className='App'>
      <Grid>
        <PopupState variant='popover' popupId='demo-popup-popover'>
          {(popupState) => (
            <div>
              <IconButton color='inherit' {...bindTrigger(popupState)}>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsIcon fontSize='default' />
                </Badge>
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <Box width={250} height={400} item className={classes.grid}>
                  <NotificationsOffIcon
                    className={classes.icon}
                    style={{ fontSize: 200 }}
                    color='disabled'
                  />
                  <Typography noWrap className={classes.text}>
                    No Notification
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
      </Grid>
    </div>
  );
}
