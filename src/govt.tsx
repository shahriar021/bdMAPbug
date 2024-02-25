import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Govt = () => {
  const fixedWidth = 733; 
  const fixedHeight = 1000; 

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: fixedWidth,
      height: fixedHeight,
      resizeMode: 'cover',
    },
  });





  // ------xy


  

  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <ScrollView>
      <Image
        source={{ uri: 'https://pani.bwdb.gov.bd/web_content/images/bangladesh.png' }}
        style={styles.image}
      />
      </ScrollView>
      
      </TouchableOpacity>
    </View>
  );
};

export default Govt;












