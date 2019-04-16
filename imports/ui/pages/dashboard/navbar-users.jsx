// import React from 'react';
import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

  class NavbarUser extends Component {
    render() {
    return this.props.users.map((users) => (
      <div key={users._id}>  
      <div className="dropdown">
     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <img src={users.picture} ></img>  {users.name}  
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Settings</a>
        <a className="dropdown-item" href="#">Subcription</a>
        <a className="dropdown-item" href="#">Bug / Help</a>
        <a className="dropdown-item" onClick={ this.Logout }>Logout</a>
      </div>
     </div>
    </div>
    ));
  }
  // All function between the class
  Logout = () => {
    Meteor.logout()
    Session.clear()
    FlowRouter.go('/')
  }
}

export default withTracker(() => {
  Meteor.subscribe('users')
  var id = Meteor.userId()
  if(!id) {
    location.reload()
  }
return {
  users: Meteor.users.find({ _id : id }).fetch(),
};
})(NavbarUser);
