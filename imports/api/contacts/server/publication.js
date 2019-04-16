import Contacts from '../contacts.js'

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("contacts", function () {
        return Contacts.find({});
      });
    Meteor.publish("contacts.all", function () {
        return Contacts.find({});
    });
  }