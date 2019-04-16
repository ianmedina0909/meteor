import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';

// small text and gray color subtitile
import DialogContentText from '@material-ui/core/DialogContentText';

const sourceList = [
  {
    value: 'Facebook',
    label: 'Facebook',
  },
  {
    value: 'Twitter',
    label: 'Twitter',
  },
  {
    value: 'Google',
    label: 'Google',
  },
  {
    value: 'Meet',
    label: 'Meet',
  },
];

const statusList = [
  {
    value: 'Active',
    label: 'Active',
  },
  {
    value: 'Inactive',
    label: 'Inactive',
  }
];

const styles = theme => ({
  dropDown: {
    marginLeft: 8,
  }
})

class FormDialog extends React.Component {
  state = {
    open: false,
    age: '',
    multiline: 'Controlled',
    source: 'Facebook',
    status: 'Active',
    
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    var name = document.getElementById('name').value
    var phoneNumber = document.getElementById('phone-number').value
    var address = document.getElementById('address').value
    var status = document.getElementById('standard-select-status').value
    var source = document.getElementById('standard-select-source').value
    var data = {
        name : name,
        phoneNumber : phoneNumber,
        address : address,
        status : status,
        source : source
    }
    console.log(data)

    Meteor.call('insertContacts', data , (error, result) => {
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
          title: 'Add Contacts',
          message: 'Success',
          type: 'success',
          style: 'growl-top-right',
          icon: 'fas fa-check'
        });
        this.setState({ open: false });
      }
    })
    
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
       <Tooltip title="Add Contact">
        <IconButton aria-label="Add" onClick={this.handleClickOpen}>
          <AddBox />
        </IconButton>
      </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
         <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <DialogTitle id="form-dialog-title">Create Contacts</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
                <TextField
              margin="dense"
              id="phone-number"
              label="Phone Number"
              type="text"
              fullWidth
            />
                <TextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
            />
                    <TextField
              id="standard-select-status"
              select
              label="Status"
              name="status"
              value={ this.state.status }
              onChange={this.handleChange('status')}
              helperText="Please select your status"
              margin="normal"
             >
            {statusList.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

             <TextField
              id="standard-select-source"
              select
              label="Source"
              name="source"
              value={ this.state.source }
              onChange={this.handleChange('source')}
              helperText="Please select your source"
              margin="normal"
              className={classNames(
                classes.dropDown
              )}
             >
            {sourceList.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}


FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);