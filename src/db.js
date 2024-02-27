import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened'),
  error => console.error('Error opening database', error),
);

const initDatabase = () => {
  // Create the loginuser table (for login purposes)
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS loginuser (user_id INTEGER PRIMARY KEY, user_name TEXT, user_pass TEXT)',
      [],
      (_, resultSet) =>
        console.log('loginuser table created successfully', resultSet),
      (_, error) => console.error('Error creating loginuser table', error),
    );
  });
};

const insertLoginUser = () => {
  // Insert a user with the password 'bd123' into the loginuser table
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO loginuser (user_name, user_pass) VALUES (?, ?)',
      ['admin', 'bd123'],
      (_, resultSet) =>
       {
        if (result.rows.length === 0) {
              // If the user doesn't exist, insert the login user
              insertLoginUser();
            } else {
              console.log('User with password bd123 already exists');
            }
          },
        console.log('Login user inserted successfully', resultSet),
      (_, error) => console.error('Error inserting login user', error),
    );
  });
};

const getUserByPassword = (password, successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM loginuser WHERE user_pass = ?',
      [password],
      (_, resultSet) => {
        console.log('Query successful', resultSet);

        // Process the query result here
        if (resultSet.rows.length > 0) {
          const user = resultSet.rows.item(0);
          successCallback(user);
        } else {
          successCallback(null); // User not found
        }
      },
      (_, error) => {
        console.error('Error querying user', error);
        errorCallback(error);
      },
    );
  });
};

const getAllUsers = (successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM loginuser',
      [],
      (_, resultSet) => {
        console.log('Query successful', resultSet);

        // Process the query result here
        const users = [];
        for (let i = 0; i < resultSet.rows.length; i++) {
          const user = resultSet.rows.item(i);
          users.push(user);
        }
        successCallback(users);
      },
      (_, error) => {
        console.error('Error querying users', error);
        errorCallback(error);
      },
    );
  });
};

export {initDatabase, insertLoginUser, getUserByPassword, getAllUsers};
