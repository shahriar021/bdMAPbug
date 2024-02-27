// db.js

import SQLite from 'react-native-sqlite-storage';

const database = SQLite.openDatabase(
  {
    name: 'myDatabase.db',
    location: 'default',
  },
  () => console.log('Database opened'),
  error => console.error('Error opening database', error),
);

const initDatabase = () => {
  database.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS loginuser (user_id TEXT PRIMARY KEY, user_name TEXT, user_fullname TEXT, user_pass TEXT, role_id TEXT, project_visitor_bn TEXT, description TEXT)',
      [],
      (_, resultSet) =>
        console.log('loginuser table created successfully', resultSet),
      (_, error) => console.error('Error creating loginuser table', error),
    );
  });
};

// const insertLoginUsersFromAPI = () => {
//   fetch('https://pani.bwdb.gov.bd/bwdb-pq/api/user.php')
//     .then(response => response.json())
//     .then(data => {
//       database.transaction(tx => {
//         data.forEach(user => {
//           tx.executeSql(
//             'INSERT INTO loginuser (user_id, user_name, user_fullname, user_pass, role_id, project_visitor_bn, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
//             [
//               user.user_id,
//               user.user_name,
//               user.user_fullname,
//               user.user_pass,
//               user.role_id,
//               user.project_visitor_bn,
//               user.description,
//             ],
//             (_, resultSet) =>
//               console.log('User inserted successfully', resultSet),
              
//             (_, error) => console.error('Error inserting user', error,user),
//           );
          
//         });
//       });
//     })
//     .catch(error => console.error('Error fetching data from API', error));
    
// };




const insertLoginUsersFromAPI = () => {
  fetch('https://pani.bwdb.gov.bd/bwdb-pq/api/user.php')
    .then(response => response.json())
    .then(data => {
      console.log('Total data items from API:', data.length);

      database.transaction(tx => {
        // Drop the existing table and recreate it
        tx.executeSql(
          'DROP TABLE IF EXISTS loginuser',
          [],
          () => console.log('Table dropped successfully'),
          (_, error) => console.error('Error dropping table', error),
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS loginuser (user_id TEXT PRIMARY KEY, user_name TEXT, user_fullname TEXT, user_pass TEXT, role_id TEXT, project_visitor_bn TEXT, description TEXT)',
          [],
          () => console.log('loginuser table created successfully'),
          (_, error) => console.error('Error creating loginuser table', error),
        );

        // Insert data into the loginuser table
        data.forEach(user => {
          tx.executeSql(
            'INSERT INTO loginuser VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              user.user_id || null,
              user.user_name || null,
              user.user_fullname || null,
              user.user_pass || null,
              user.role_id || null,
              user.project_visitor_bn || null,
              user.description || null,
            ],
            (_, resultSet) =>
              console.log('User inserted successfully', resultSet),
            (_, error) => console.error('Error inserting user', error, user),
          );
        });
      });
    })
    .catch(error => console.error('Error fetching data from API', error));
};






const getUsersByPassword = (password, successCallback, errorCallback) => {
  database.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM loginuser WHERE user_pass = ?',
      [password], // Use the dynamic password parameter here
      (_, resultSet) => {
        const users = [];
        for (let i = 0; i < resultSet.rows.length; i++) {
          const user = resultSet.rows.item(i);
          users.push(user);
        }
        successCallback(users);
      },
      (_, error) => {
        console.error('Error querying users by password', error);
        errorCallback(error);
      },
    );
  });
};


export {initDatabase, insertLoginUsersFromAPI, getUsersByPassword};
