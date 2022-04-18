import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function Schema(props) {
  const classes = useStyles();
  const { SchemaName } = props;
  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        <Breadcrumbs maxItems={3} aria-label='breadcrumb'>
          <Typography color='textPrimary'>szszzszs</Typography>
          <Typography color='textPrimary'>szszzsszsz</Typography>
          <Typography color='textPrimary'>szszszszsz</Typography>
          <Typography color='textPrimary'>zsszszzszs</Typography>
        </Breadcrumbs>
      </Breadcrumbs>
    </div>
  );
}
