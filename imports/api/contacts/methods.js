import Contacts from '../contacts/contacts.js'

Contacts.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
  });

Meteor.methods({
    insertContacts : (data) => {
        Contacts.insert(data)
    }
});

Meteor.methods({
    removeContact : (id) => {
        Contacts.remove({ _id : id})
    }
});
