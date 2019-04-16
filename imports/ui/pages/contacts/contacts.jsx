import React, { useState } from 'react';
import PropTypes, { array } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withTracker } from 'meteor/react-meteor-data';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';  
import Toolbar from '@material-ui/core/Toolbar';
// component import
import Contacts from '../../../api/contacts/contacts.js'
import FormDialog from './addContactsModal.jsx'
import FormEdit from './editContactsModal.jsx'
// end
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import '../../stylesheet/contacts.css'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  title:{
    flex: 1,
    fontWeight: 550,
    fontSize: '25px',
  }
});

const ContactsList = (props) =>  {
  let [checked, setChecked] = useState(false);
  let [idChecked, setIdChecked] = useState([])
  
  const { classes } = props;

  handleClickAll  = () => {
    checked != true ? setChecked(checked = true) : setChecked(checked = false)
    setIdChecked(idChecked = [])
  }

  handleClick = event => {
    checkerData(event.target.value)
  }

  handleEdit = (event) => {
    console.log(event.target.value)
  }

  handleDeleteContact = () => {
  if(idChecked.length > 0) {
    idChecked.map(id => {
      Meteor.call('removeContact', id , (error, result) => {
        if(error) {
          Bert.alert({
            title: 'Error occured',
            message: 'Error Adding Contacts',
            type: 'danger',
            style: 'growl-top-right',
            icon: 'fas fa-times'
          }); 
        } else {
          Bert.alert({
            title: 'Delete Contacts',
            message: 'Success',
            type: 'success',
            style: 'growl-top-right',
            icon: 'fas fa-check'
          });
        }
      })
    })
  } else {
    Bert.alert({
      title: 'Error occured',
      message: 'Select Contacts',
      type: 'danger',
      style: 'growl-top-right',
      icon: 'fas fa-times'
    }); 
   }
  }

  let checkerData = (value) => {
    if(idChecked.includes(value) == true){
      var filteredAry = idChecked.filter(e => e !== value)
      setIdChecked(idChecked = filteredAry)
    } else {
      setIdChecked([...idChecked,event.target.value])
    }
  }
  
  console.log(idChecked)
  return (
    <Paper className={classes.root}>
    <Toolbar>
    <Typography type="title" color="inherit" className={classes.title}>
      Contacts
    </Typography>
    <Tooltip title="Delete Contact" onClick={this.handleDeleteContact}>
    <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      </Tooltip>
     <div>
    <FormDialog />
    </div>
  </Toolbar>
    {/* <div className={classes.addContacts}>
       <FormDialog /> 
     </div> */}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell>  
              <Checkbox 
                onClick={this.handleClickAll}
                />
              </TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Phone Number</TableCell>
            <TableCell >Source</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.contacts.map(contacts => (
            
            <TableRow key={contacts._id} className="rowListContact" onClick={this.handleEdit} value={contacts._id}>
                <TableCell>  
              <Checkbox
                value={contacts._id}
                onClick={this.handleClick}
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

ContactsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const trackerContact = withTracker(() => {
  Meteor.subscribe('contacts')
  return {
    contacts: Contacts.find().fetch(),
  };
});

export default (trackerContact)(withStyles(styles)(ContactsList));