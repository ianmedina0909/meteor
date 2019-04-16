if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("users", function () {
        return Meteor.users.find({});
      });
    Meteor.publish("users.all", function () {
        return Meteor.users.find({});
    });
  }