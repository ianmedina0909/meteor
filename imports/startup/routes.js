// import App from '../ui/App.jsx'
import Login from '../ui/pages/loginForm.jsx'
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Main from '../ui/pages/dashboard/dashboard.jsx'
import { Meteor } from 'meteor/meteor';
import  App  from '../ui/pages/contacts/contactsList.jsx'
Accounts.onLogin((user) => { 
  
if(Meteor.userId()) {
     if(user.type != 'resume'){
       FlowRouter.go('/')
       location.reload()
       console.log('tangain')
    }
  } 
});

if(Meteor.userId()) {
  FlowRouter.route('/', {
    name: 'dashboard',
    action() {
          mount( Main, {
            content: <Main />
          })
      },
  })

} else {
  FlowRouter.route('/', {
    name: 'App.home',
    action(){
      mount( Login, { content: <Login /> })
    }
  });  
}

FlowRouter.route('/sample', {
  name: 'dashboard',
  action() {
        mount( App, {
          content: <App />
        })
    },
})


FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions: function() {

  },
  action: function() {
    console.log('not Found')
  }
};