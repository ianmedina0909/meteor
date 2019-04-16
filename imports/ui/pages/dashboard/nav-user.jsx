import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// App component - represents the whole app
class Users extends Component {
  render() {
    return this.props.users.map((users) => (
        <div key={users._id}>  
         <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {users.name}  
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
       </div>
    ));
  }
}
 
export default withTracker(() => {
    Meteor.subscribe('users')
  return {
    users: Meteor.users.find({_id : Session.get('userId')}).fetch(),
  };
})(Users);