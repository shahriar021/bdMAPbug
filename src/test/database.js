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
    // tx.executeSql(
    //   'CREATE TABLE IF NOT EXISTS loginuser (user_id TEXT PRIMARY KEY, user_name TEXT, user_fullname TEXT, user_pass TEXT, role_id TEXT, project_visitor_bn TEXT, description TEXT)',
    //   [],
    //   (_, resultSet) =>
    //     console.log('loginuser table created successfully', resultSet),
    //   (_, error) => console.error('Error creating loginuser table', error),
    // );


    // ------------------

    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS projectData (js_project TEXT, constituencyno TEXT, office TEXT, project_id TEXT PRIMARY KEY, project_code TEXT, project_status_name_bn TEXT, project_status TEXT, project_type_name_bn TEXT, project_name_bn TEXT, project_start TEXT, project_end TEXT, project_text TEXT, project_expenditure TEXT, project_cost TEXT, donor_name_bn TEXT, progress_status TEXT)',
      [],
      (_, resultSet) =>
        console.log('projectData table created successfully', resultSet),
      (_, error) => console.error('Error creating projectData table', error),
    );
  });
};






const insertLoginUsersFromAPI = () => {
  fetch('https://pani.bwdb.gov.bd/bwdb-pq/api/user.php')
    .then(response => response.json())
    .then(data => {
     // console.log('Total data items from API:', data.length);

      database.transaction(tx => {
        // Drop the existing table and recreate it
        tx.executeSql(
          'DROP TABLE IF EXISTS loginuser',
          [],
          () => //console.log('Table dropped successfully'),
          (_, error) => console.error('Error dropping table', error),
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS loginuser (user_id TEXT PRIMARY KEY, user_name TEXT, user_fullname TEXT, user_pass TEXT, role_id TEXT, project_visitor_bn TEXT, description TEXT)',
          [],
          () => //console.log('loginuser table created successfully'),
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
             // console.log('User inserted successfully', resultSet),
            (_, error) => console.error('Error inserting user', error, user),
          );
        });
      });
    })
    .catch(error => console.error('Error fetching data from API', error));
};













const insertProjectDataFromAPI = () => {
  fetch('https://pani.bwdb.gov.bd/bwdb-pq/api/project.php')
    .then(response => response.json())
    .then(data => {
      console.log('Total project data items from API:', data.length);

      database.transaction(tx => {
        // Drop the existing projectData table and recreate it
        tx.executeSql(
          'DROP TABLE IF EXISTS projectData',
          [],
          () => console.log('projectData Table dropped successfully'),
          (_, error) => console.error('Error dropping projectData table', error),
        );

        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS projectData (js_project TEXT, constituencyno TEXT, office TEXT, project_id TEXT , project_code TEXT, project_status_name_bn TEXT, project_status TEXT, project_type_name_bn TEXT, project_name_bn TEXT, project_start TEXT, project_end TEXT, project_text TEXT, project_expenditure TEXT, project_cost TEXT, donor_name_bn TEXT, progress_status TEXT)',
          [],
          () => console.log('projectData table created successfully'),
          (_, error) => console.error('Error creating projectData table', error),
        );

        // Insert data into the projectData table
        data.forEach(project => {
          tx.executeSql(
            'INSERT INTO projectData VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
              project.js_project || null,
              project.constituencyno || null,
              project.office || null,
              project.project_id || null,
              project.project_code || null,
              project.project_status_name_bn || null,
              project.project_status || null,
              project.project_type_name_bn || null,
              project.project_name_bn || null,
              project.project_start || null,
              project.project_end || null,
              project.project_text || null,
              project.project_expenditure || null,
              project.project_cost || null,
              project.donor_name_bn || null,
              project.progress_status || null,
            ],
            (_, resultSet) =>
              //console.log('Project data inserted successfully', resultSet),
            (_, error) => console.error('Error inserting project data', error, project),
          );
        });
      });
    })
    .catch(error => console.error('Error fetching project data from API', error));
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


export {initDatabase, insertLoginUsersFromAPI, getUsersByPassword,insertProjectDataFromAPI};
