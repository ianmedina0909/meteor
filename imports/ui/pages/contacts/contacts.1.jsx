import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withTracker } from 'meteor/react-meteor-data';
import Checkbox from '@material-ui/core/Checkbox';
import FormDialog from './addContactsModal.jsx'
import Typography from '@material-ui/core/Typography';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  grow:{
    flexGrow: 1,
  }
});

const SimpleTable = (props) =>  {
  console.log(props.contacts)
  const { classes } = props;

  return (

    <Paper className={classes.root}>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell >#</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Phone Number</TableCell>
            <TableCell >Source</TableCell>
            <TableCell >Address (g)</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.contacts.map(contacts => (
          
            <TableRow key={contacts._id}>
                <TableCell>  
              <Checkbox
                value={contacts._id}
                />
              </TableCell>
              <TableCell>
                {contacts.name}
              </TableCell>
              <TableCell >{contacts.phoneNumber}</TableCell>
              <TableCell >{contacts.source}</TableCell>
              <TableCell >{contacts.address}</TableCell>
              <TableCell>{contacts.status}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const trackerContact = withTracker(() => {
  Meteor.subscribe('contacts')
  console.log(Contacts.find({}).fetch())
return {
   contacts: Contacts.find().fetch(),
};
});

export default (trackerContact)(withStyles(styles)(SimpleTable));