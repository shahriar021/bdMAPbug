import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened'),
  error => console.error('Error opening database', error),
);

// const initDatabase = () => {
//   // Create a table (for demonstration purposes)
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)',
//       [],
//       (_, resultSet) => console.log('Table created successfully', resultSet),
//       (_, error) => console.error('Error creating table', error),
//     );
//   });
// };

const insertUser = (name, email) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email],
      (_, resultSet) => console.log('Data inserted successfully', resultSet),
      (_, error) => console.error('Error inserting data', error),
    );
  });
};

const getUsers = (successCallback, errorCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users',
      [],
      (_, resultSet) => {
        console.log('Query successful', resultSet);

        // Process the query result here
        if (resultSet.rows.length > 0) {
          const users = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const row = resultSet.rows.item(i);
            users.push(row);
          }
          successCallback(users);
        }
      },
      (_, error) => {
        console.error('Error querying data', error);
        errorCallback(error);
      },
    );
  });
};


// ... (previous code)

const getUserByPassword = (password, successCallback, errorCallback) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM LoginTable WHERE password = ?',
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
        }
      );
    });
  };
  
  const initDatabase = () => {
    // Create the LoginTable (for login purposes)
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS LoginTable (user_id INTEGER PRIMARY KEY, user_name TEXT, user_fullname TEXT, user_pass TEXT, role_id INTEGER, project_visitor_bn TEXT, description TEXT)',
        [],
        (_, resultSet) => console.log('LoginTable created successfully', resultSet),
        (_, error) => console.error('Error creating LoginTable', error)
      );
    });
  };
  
  const insertLoginData = () => {
    // Insert the provided login data into the LoginTable
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO LoginTable (user_id, user_name, user_fullname, user_pass, role_id, project_visitor_bn, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [99, 'admin@gmail.com', 'Admin', 'bwdb1234', 99, 'Admin', 'Admin'],
        (_, resultSet) => console.log('Login data inserted successfully', resultSet),
        (_, error) => console.error('Error inserting login data', error)
      );
    });
  };
  
  export { initDatabase, insertUser, getUsers, getUserByPassword, insertLoginData };

