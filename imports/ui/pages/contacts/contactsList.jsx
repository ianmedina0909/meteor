
// import React, { useState } from 'react';
// import { withTracker } from 'meteor/react-meteor-data';
// import Contacts from '../../../api/contacts/contacts.js'
// function Example(props) {
//   // Declare a new state variable, which we'll call "count"
//   props.users.map((users) => { 
//     console.log(users.name)
//   })
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       {
//         props.users.map((users) => { 
//           return (
//             <div key={users._id}> {users.name}</div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default withTracker(() => {
//   Meteor.subscribe('contacts')
//   console.log(Contacts.find({}).fetch())
// return {
//   users: Contacts.find().fetch(),
// };
// })(Example);