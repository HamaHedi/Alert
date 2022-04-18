import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff'
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            {/* <InputBase
              placeholder='Search topics'
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize='small' />}
            /> */}
          </Grid>
          {/* <Grid item xs={11}></Grid> */}

          <Grid item>
            <PopupState variant='popover' popupId='demo-popup-popover'>
              {(popupState) => (
                <div>
                  <IconButton {...bindTrigger(popupState)}>
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
                    <Box width={250} height={400}>
                      <List component='Box' aria-label='mailbox folders'>
                        <ListItem button>
                          <ListItemText
                            primary='Inbox'
                            secondary='Jan 7, 2014'
                          />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                          <ListItemText
                            primary='Drafts'
                            secondary='Jan 7, 2014'
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            primary='Trash'
                            secondary='Jan 7, 2014'
                          />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                          <ListItemText
                            primary='Spam'
                            secondary='Jan 7, 2014'
                          />
                        </ListItem>
                      </List>
                    </Box>
                  </Popover>
                </div>
              )}
            </PopupState>
            {/* <IconButton>
              {/* <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge> */}

            {/* <IconButton>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
