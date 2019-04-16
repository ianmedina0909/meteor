import { Meteor } from 'meteor/meteor';
import '../imports/api/all-methods.js'
import '../imports/startup/server.js'

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: 'google'},
    {
        $set: {
            clientId: "28276084518-v0d02furv0ec448nst1mli0e568l6b34.apps.googleusercontent.com",
            loginStyle: 'popup',
            secret: "RKLEwlYE5LGdiAaT1uP5zA-T"
        }
    });
});