import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const UserData = () => {
  // State variables
  const [User, setUser] = useState(null);

  async function addUser() {
    try {
      // create a new Parse Object instance
      const User = new Parse.Object('User');
      // define the attributes you want for your Object
      User.set('name', 'Joey');
      User.set('email', 'Joey@back4app.com');
      // save it on Back4App Data Store
      await User.save();
      alert('User saved!');
    } catch (error) {
      console.log('Error saving new User: ', error);
    }
  }

  async function fetchUser() {
    // create your Parse Query using the User Class you've created
    const query = new Parse.Query('User');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('name', 'Joey');
    // run the query
    const User = await query.first();
    // access the Parse Object attributes
    console.log('User name: ', User.get('name'));
    console.log('User email: ', User.get('email'));
    console.log('User id: ', User.id);
    setUser(User);
  }

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <button onClick={fetchUser}>Fetch User</button>
      {User !== null && (
        <div>
          <p>{`Name: ${User.get('name')}`}</p>
          <p>{`Email: ${User.get('email')}`}</p>
        </div>
      )}
    </div>
  );
};