import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { insertProjectDataFromAPI } from './database';

const ProjectData = () => {
  const [projectData, setProjectData] = useState([]);
    
  useEffect( () => {
    // Open the database
   
    const db = openDatabase({ name: 'myDatabase.db', location: 'default' });
     //insertProjectDataFromAPI()
    // Fetch data from projectData table
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM projectData',
        [],
        (_, resultSet) => {
          const data = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            const project = resultSet.rows.item(i);
            data.push(project);
            //console.log('Data fetched successfully:', resultSet.rows.raw());
          }
          setProjectData(data);
          
        },
        (_, error) => {
          console.error('Error fetching project data', error);
          // Handle the error as needed
        }
      );
    }
    );
}, []); // Run once when the component mounts
  
  //console.log(projectData,"this is project data")
  return (
    <View>
    <Text style={{color:"red"}}>ProjectData</Text>
    <FlatList
      data={projectData}
    
      keyExtractor={(item) => item.project_id.toString()}
      renderItem={({ item }) => (
        <View style={styles.projectItem}>
          <Text>{`Project ID: ${item.project_id}`}</Text>
          <Text>{`Project Name: ${item.project_name_bn}`}</Text>
          <Text>{`Project Status: ${item.project_status_name_bn}`}</Text>
          <Text>{`Project Type: ${item.project_type_name_bn}`}</Text>
          <Text>{`Start Date: ${item.project_start}`}</Text>
          <Text>{`End Date: ${item.project_end}`}</Text>
          <Text>{`Expenditure: ${item.project_expenditure}`}</Text>
          <Text>{`Cost: ${item.project_cost}`}</Text>
          <Text>{`Donor: ${item.donor_name_bn}`}</Text>
          <Text>{`Progress Status: ${item.progress_status}`}</Text>
          {/* Add more Text components for other project attributes */}
        </View>
      )}
    />
  </View>
  );
};

export default ProjectData;

const styles = StyleSheet.create({});
