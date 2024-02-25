import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const Test2 = () => {
    const fixedWidth = 733; 
    const fixedHeight = 1000; 

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:20
      
    },
    backgroundImage: {
      width: fixedWidth,
      height: fixedHeight,
      resizeMode: 'cover',
    },
    svg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: fixedWidth,
      height: fixedHeight,
    },
    // modalContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    // modalContent: {
    //   backgroundColor: 'white',
    //   padding: 20,
    //   borderRadius: 10,
    //   elevation: 5,
    //   display: 'flex',
    // },
    // modalText: {
    //   fontSize: 16,
    // },










    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContent: {
        backgroundColor: '#fff', // White background
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        width: 300, // Adjust the width as needed
        alignItems: 'center',
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333', // Dark text color
      },
      closeButton: {
        backgroundColor: '#3498db', // Button background color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },
      closeButtonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        textAlign: 'center',
      },


  });

  const handlePointPress = point => {
    setModalVisible(true);
    setSelectedPoint(point);
    console.log('Point pressed:', point);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView  horizontal={true}>
      <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          // source={{
          //   uri: 'https://pani.bwdb.gov.bd/web_content/images/bangladesh.png',
          // }}
          source={require('../assests/bangladesh.png')}
          style={styles.backgroundImage}>
          {/* Your touchable points go here */}
          <Svg style={styles.svg} key="Svg1">
            {/* Example circles representing touchable points */}
            <Circle
              cx="85"
              cy="50"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 1')}
            />
            <Circle
              cx="85"
              cy="80"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 2')}
            />
            <Circle
              cx="60"
              cy="99"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 3')}
            />
            <Circle
              cx="30"
              cy="85"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 4')}
            />
            <Circle
              cx="25"
              cy="130"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 5')}
            />
            <Circle
              cx="70"
              cy="130"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 6')}
            />
            <Circle
              cx="70"
              cy="170"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 7')}
            />
            <Circle
              cx="84"
              cy="189"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 8')}
            />
            <Circle
              cx="105"
              cy="140"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 9')}
            />
            <Circle
              cx="130"
              cy="189"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 10')}
            />
            <Circle
              cx="160"
              cy="220"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 11')}
            />
            <Circle
              cx="115"
              cy="87"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 12')}
            />
            <Circle
              cx="120"
              cy="129"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 13')}
            />
            <Circle
              cx="140"
              cy="105"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 14')}
            />
            <Circle
              cx="147"
              cy="137"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 15')}
            />
            <Circle
              cx="150"
              cy="50"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 16')}
            />
            <Circle
              cx="190"
              cy="110"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 17')}
            />
            <Circle
              cx="200"
              cy="130"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 18')}
            />
            <Circle
              cx="170"
              cy="125"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 19')}
            />
              <Circle
              cx="140"
              cy="150"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 20')}
            />
            <Circle
              cx="170"
              cy="164"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 21')}
            />
            <Circle
              cx="205"
              cy="167"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 22')}
            />
            <Circle
              cx="189"
              cy="180"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 23')}
            />
            <Circle
              cx="170"
              cy="200"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 24')}
            />
            <Circle
              cx="260"
              cy="110"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 25')}
            />
            <Circle
              cx="249"
              cy="130"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 26')}
            />
            <Circle
              cx="253"
              cy="160"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 27')}
            />
            <Circle
              cx="266"
              cy="180"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 28')}
            />
             <Circle
              cx="230"
              cy="200"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 29')}
            />
            <Circle
              cx="230"
              cy="220"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 30')}
            />
            <Circle
              cx="200"
              cy="220"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 31')}
            />
            <Circle
              cx="190"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 32')}
            />
            <Circle
              cx="230"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 33')}
            />
            <Circle
              cx="145"
              cy="255"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 34')}
            />
            <Circle
              cx="165"
              cy="265"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 35')}
            />
            <Circle
              cx="230"
              cy="300"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 36')}
            />
            <Circle
              cx="200"
              cy="280"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 37')}
            />
            <Circle
              cx="160"
              cy="295"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 38')}
            />
            <Circle
              cx="170"
              cy="320"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 39')}
            />
            <Circle
              cx="219"
              cy="340"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 40')}
            />
            <Circle
              cx="199"
              cy="303"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 41')}
            />
            <Circle
              cx="195"
              cy="329"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 42')}
            />
            <Circle
              cx="10"
              cy="320"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 43')}
            />
            <Circle
              cx="35"
              cy="305"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 44')}
            />
            <Circle
              cx="25"
              cy="345"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 45')}
            />
            <Circle
              cx="70"
              cy="285"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 46')}
            />
            <Circle
              cx="90"
              cy="260"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 47')}
            />
            <Circle
              cx="120"
              cy="299"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 48')}
            />
            <Circle
              cx="90"
              cy="330"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 49')}
            />
            <Circle
              cx="120"
              cy="321"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 50')}
            />
            <Circle
              cx="140"
              cy="340"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 51')}
            />
            <Circle
              cx="40"
              cy="370"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 52')}
            />
            <Circle
              cx="80"
              cy="390"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 53')}
            />
            <Circle
              cx="72"
              cy="347"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 54')}
            />
            <Circle
              cx="119"
              cy="350"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 55')}
            />
            <Circle
              cx="110"
              cy="379"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 56')}
            />
            <Circle
              cx="98"
              cy="405"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 57')}
            />
            <Circle
              cx="130"
              cy="400"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 58')}
            />
            <Circle
              cx="145"
              cy="375"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 59')}
            />
            <Circle
              cx="175"
              cy="367"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 60')}
            />
            <Circle
              cx="170"
              cy="390"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 61')}
            />
            <Circle
              cx="255"
              cy="340"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 62')}
            />
            <Circle
              cx="240"
              cy="365"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 63')}
            />
            <Circle
              cx="200"
              cy="375"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 64')}
            />
            <Circle
              cx="210"
              cy="390"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 65')}
            />
            <Circle
              cx="250"
              cy="410"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 66')}
            />
            <Circle
              cx="223"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 67')}
            />
            <Circle
              cx="234"
              cy="440"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 68')}
            />
            <Circle
              cx="210"
              cy="460"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 69')}
            />
            <Circle
              cx="190"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 70')}
            />
            <Circle
              cx="150"
              cy="440"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 71')}
            />
            <Circle
              cx="190"
              cy="440"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 72')}
            />
            <Circle
              cx="70"
              cy="500"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 73')}
            />
            <Circle
              cx="90"
              cy="470"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 74')}
            />
            <Circle
              cx="100"
              cy="440"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 75')}
            />
            <Circle
              cx="130"
              cy="450"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 76')}
            />
            <Circle
              cx="139"
              cy="480"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 77')}
            />
            <Circle
              cx="170"
              cy="464"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 78')}
            />
            <Circle
              cx="115"
              cy="500"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 79')}
            />
            <Circle
              cx="95"
              cy="520"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 80')}
            />
            <Circle
              cx="165"
              cy="500"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 81')}
            />
            <Circle
              cx="150"
              cy="530"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 82')}
            />
            <Circle
              cx="100"
              cy="560"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 83')}
            />
            <Circle
              cx="160"
              cy="560"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 84')}
            />
             <Circle
              cx="120"
              cy="600"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 85')}
            />
            <Circle
              cx="150"
              cy="600"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 86')}
            />
             <Circle
              cx="155"
              cy="580"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 87')}
            />
            <Circle
              cx="185"
              cy="589"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 88')}
            />
            <Circle
              cx="160"
              cy="620"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 89')}
            />
            <Circle
              cx="165"
              cy="640"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 90')}
            />
            <Circle
              cx="191"
              cy="530"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 91')}
            />
            <Circle
              cx="195"
              cy="560"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 92')}
            />
            <Circle
              cx="220"
              cy="600"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 93')}
            />
            <Circle
              cx="235"
              cy="575"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 94')}
            />
            <Circle
              cx="260"
              cy="649"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 95')}
            />
            <Circle
              cx="260"
              cy="680"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 96')}
            />
            <Circle
              cx="230"
              cy="710"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 97')}
            />
            <Circle
              cx="270"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 98')}
            />
            <Circle
              cx="204"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 99')}
            />
            <Circle
              cx="230"
              cy="659"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 100')}
            />
            <Circle
              cx="200"
              cy="628"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 101')}
            />
            <Circle
              cx="246"
              cy="630"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 102')}
            />
            <Circle
              cx="200"
              cy="663"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 103')}
            />
            <Circle
              cx="200"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 104')}
            />
            <Circle
              cx="165"
              cy="670"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 105')}
            />
            <Circle
              cx="135"
              cy="670"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 106')}
            />
            <Circle
              cx="140"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 107')}
            />
            <Circle
              cx="150"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 108')}
            />
            <Circle
              cx="330"
              cy="780"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 109')}
            />
            <Circle
              cx="300"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 110')}
            />
            <Circle
              cx="322"
              cy="720"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 111')}
            />
            <Circle
              cx="380"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 112')}
            />
            <Circle
              cx="360"
              cy="760"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 113')}
            />
             <Circle
              cx="320"
              cy="819"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 114')}
            />
            <Circle
              cx="390"
              cy="675"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 115')}
              
            />
            <Circle
              cx="420"
              cy="710"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 116')}
            />
            <Circle
              cx="400"
              cy="730"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 117')}
            />
            <Circle
              cx="400"
              cy="780"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 118')}
            />
            <Circle
              cx="320"
              cy="620"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 119')}
            />
            <Circle
              cx="320"
              cy="650"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 120')}
            />
            <Circle
              cx="340"
              cy="650"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 121')}
            />
            <Circle
              cx="360"
              cy="622"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 122')}
            />
            <Circle
              cx="360"
              cy="675"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 123')}
            />
            <Circle
              cx="360"
              cy="690"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 124')}
            />
            <Circle
              cx="310"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 125')}
            />
            <Circle
              cx="320"
              cy="680"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 126')}
            />
            <Circle
              cx="290"
              cy="680"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 127')}
            />
            <Circle
              cx="300"
              cy="650"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 128')}
            />
            <Circle
              cx="280"
              cy="725"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 129')}
            />
            <Circle
              cx="299"
              cy="345"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 130')}
            />
            <Circle
              cx="270"
              cy="365"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 131')}
            />
            <Circle
              cx="300"
              cy="375"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 132')}
            />
            <Circle
              cx="275"
              cy="385"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 133')}
            />
            <Circle
              cx="285"
              cy="413"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 134')}
            />
            <Circle
              cx="280"
              cy="439"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 135')}
            />
            <Circle
              cx="310"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 136')}
            />
            <Circle
              cx="300"
              cy="400"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 137')}
            />
            <Circle
              cx="260"
              cy="221"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 138')}
            />
            <Circle
              cx="250"
              cy="275"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 139')}
            />
            <Circle
              cx="270"
              cy="290"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 140')}
            />
            <Circle
              cx="270"
              cy="327"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 141')}
            />
            <Circle
              cx="285"
              cy="300"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 142')}
            />
            <Circle
              cx="310"
              cy="280"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 143')}
            />
            <Circle
              cx="330"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 144')}
            />
            <Circle
              cx="295"
              cy="237"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 145')}
            />
            <Circle
              cx="370"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 146')}
            />
            <Circle
              cx="350"
              cy="299"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 147')}
            />
            <Circle
              cx="395"
              cy="320"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 148')}
            />
            <Circle
              cx="350"
              cy="329"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 149')}
            />
            <Circle
              cx="315"
              cy="320"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 150')}
            />
            <Circle
              cx="330"
              cy="359"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 151')}
            />
            <Circle
              cx="355"
              cy="359"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 152')}
            />
            <Circle
              cx="380"
              cy="349"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 153')}
            />
            <Circle
              cx="400"
              cy="350"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 154')}
            />
            <Circle
              cx="375"
              cy="389"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 155')}
            />
            <Circle
              cx="350"
              cy="389"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 156')}
            />
            <Circle
              cx="410"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 157')}
            />
            <Circle
              cx="420"
              cy="280"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 158')}
            />
            <Circle
              cx="420"
              cy="320"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 159')}
            />
             <Circle
              cx="450"
              cy="310"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 160')}
            />
            <Circle
              cx="390"
              cy="275"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 161')}
            />
            <Circle
              cx="410"
              cy="380"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 162')}
            />
            <Circle
              cx="410"
              cy="400"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 163')}
            />
            <Circle
              cx="430"
              cy="370"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 164')}
            />
            <Circle
              cx="460"
              cy="365"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 165')}
            />
            <Circle
              cx="440"
              cy="392"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 166')}
            />
            <Circle
              cx="440"
              cy="430"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 167')}
            />
            <Circle
              cx="270"
              cy="470"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 168')}
            />
            <Circle
              cx="295"
              cy="485"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 169')}
            />
             <Circle
              cx="295"
              cy="455"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 170')}
            />
            <Circle
              cx="335"
              cy="525"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 171')}
            />
            <Circle
              cx="360"
              cy="544"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 172')}
            />
            <Circle
              cx="380"
              cy="539"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 173')}
            />
            <Circle
              cx="315"
              cy="495"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 174')}
            />
            <Circle
              cx="335"
              cy="499"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 175')}
            />
            <Circle
              cx="700"
              cy="469"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 176')}
            />
            <Circle
              cx="725"
              cy="459"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 177')}
            />
             <Circle
              cx="735"
              cy="439"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 178')}
            />
            <Circle
              cx="700"
              cy="453"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 179')}
            />
            <Circle
              cx="680"
              cy="453"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 180')}
            />
            <Circle
              cx="699"
              cy="433"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 181')}
            />
            <Circle
              cx="720"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 182')}
            />
            <Circle
              cx="730"
              cy="400"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 183')}
            />
            <Circle
              cx="700"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 184')}
            />
             <Circle
              cx="670"
              cy="435"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 185')}
            />
            <Circle
              cx="670"
              cy="420"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 186')}
            />
            <Circle
              cx="670"
              cy="405"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 187')}
            />
            <Circle
              cx="685"
              cy="410"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 188')}
            />
            <Circle
              cx="685"
              cy="389"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 189')}
            />
            <Circle
              cx="699"
              cy="392"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 190')}
            />
             <Circle
              cx="720"
              cy="380"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 191')}
            />
            <Circle
              cx="335"
              cy="470"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 192')}
            />
            <Circle
              cx="320"
              cy="450"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 193')}
            />
            <Circle
              cx="340"
              cy="430"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 194')}
            />
             <Circle
              cx="360"
              cy="462"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 195')}
            />
            <Circle
              cx="360"
              cy="419"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 196')}
            />
            <Circle
              cx="380"
              cy="429"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 197')}
            />
            <Circle
              cx="380"
              cy="455"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 198')}
            />
            <Circle
              cx="410"
              cy="465"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 199')}
            />
             <Circle
              cx="395"
              cy="450"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 200')}
            />
            <Circle
              cx="410"
              cy="450"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 201')}
            />
            <Circle
              cx="410"
              cy="425"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 202')}
            />
            <Circle
              cx="432"
              cy="449"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 203')}
            />
            <Circle
              cx="370"
              cy="486"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 204')}
            />
            <Circle
              cx="405"
              cy="498"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 205')}
            />
            <Circle
              cx="380"
              cy="498"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 206')}
            />
            <Circle
              cx="360"
              cy="498"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 207')}
            />
            <Circle
              cx="389"
              cy="519"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 208')}
            />
            




























            {/* ----------------- */}
            <Circle
              cx="245"
              cy="499"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 209')}
            />
            <Circle
              cx="205"
              cy="499"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 210')}
            />
            <Circle
              cx="240"
              cy="535"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 211')}
            />
            <Circle
              cx="270"
              cy="540"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 212')}
            />
            <Circle
              cx="270"
              cy="505"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 213')}
            />
            <Circle
              cx="300"
              cy="539"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 214')}
            />
            <Circle
              cx="260"
              cy="579"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 215')}
            />
            <Circle
              cx="255"
              cy="605"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 216')}
            />
            <Circle
              cx="290"
              cy="629"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 217')}
            />
            <Circle
              cx="324"
              cy="541"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 218')}
            />
            <Circle
              cx="315"
              cy="584"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 219')}
            />
            <Circle
              cx="330"
              cy="590"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 220')}
            />
            <Circle
              cx="340"
              cy="565"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 221')}
            />
            <Circle
              cx="370"
              cy="570"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 222')}
            />
            <Circle
              cx="375"
              cy="595"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 223')}
            />
            <Circle
              cx="470"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 224')}
            />
            <Circle
              cx="490"
              cy="300"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 225')}
            />
            <Circle
              cx="530"
              cy="329"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 226')}
            />
            <Circle
              cx="505"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 227')}
            />
            <Circle
              cx="540"
              cy="270"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 228')}
            />
            <Circle
              cx="585"
              cy="280"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 229')}
            />
            <Circle
              cx="570"
              cy="310"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 230')}
            />
            <Circle
              cx="590"
              cy="329"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 231')}
            />
            <Circle
              cx="590"
              cy="250"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 232')}
            />
            <Circle
              cx="670"
              cy="290"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 233')}
            />
            <Circle
              cx="615"
              cy="310"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 234')}
            />
            <Circle
              cx="640"
              cy="340"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 235')}
            />
            <Circle
              cx="600"
              cy="380"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 236')}
            />
            <Circle
              cx="580"
              cy="359"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 237')}
            />
            <Circle
              cx="560"
              cy="400"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 238')}
            />
            <Circle
              cx="530"
              cy="375"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 239')}
            />
            <Circle
              cx="510"
              cy="350"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 240')}
            />
            <Circle
              cx="510"
              cy="390"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 241')}
            />
            <Circle
              cx="525"
              cy="419"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 242')}
            />
            <Circle
              cx="480"
              cy="405"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 243')}
            />
            <Circle
              cx="470"
              cy="442"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 244')}
            />
            <Circle
              cx="490"
              cy="455"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 245')}
            />
            <Circle
              cx="490"
              cy="480"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 246')}
            />
            <Circle
              cx="450"
              cy="479"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 247')}
            />
            <Circle
              cx="428"
              cy="475"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 248')}
            />
            <Circle
              cx="410"
              cy="539"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 249')}
            />
            <Circle
              cx="410"
              cy="515"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 250')}
            />
            <Circle
              cx="440"
              cy="505"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 251')}
            />
            <Circle
              cx="460"
              cy="515"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 252')}
            />
            <Circle
              cx="485"
              cy="515"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 253')}
            />
            <Circle
              cx="495"
              cy="545"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 254')}
            />
            <Circle
              cx="455"
              cy="540"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 255')}
            />
            <Circle
              cx="475"
              cy="560"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 256')}
            />
            <Circle
              cx="460"
              cy="590"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 257')}
            />
            <Circle
              cx="499"
              cy="590"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 258')}
            />
            <Circle
              cx="505"
              cy="570"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 259')}
            />
            <Circle
              cx="425"
              cy="562"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 260')}
            />
            <Circle
              cx="400"
              cy="555"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 261')}
            />
            <Circle
              cx="395"
              cy="585"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 262')}
            />
            <Circle
              cx="405"
              cy="599"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 263')}
            />
            <Circle
              cx="425"
              cy="580"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 264')}
            />
            <Circle
              cx="535"
              cy="590"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 265')}
            />
            <Circle
              cx="535"
              cy="615"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 266')}
            />
            <Circle
              cx="510"
              cy="640"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 267')}
            />
            <Circle
              cx="450"
              cy="615"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 268')}
            />
            <Circle
              cx="493"
              cy="615"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 269')}
            />
              <Circle
              cx="470"
              cy="635"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 270')}
              />
              <Circle
              cx="470"
              cy="675"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 271')}
              />
              <Circle
              cx="490"
              cy="655"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 272')}
              />
              <Circle
              cx="470"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 273')}
              />
              <Circle
              cx="430"
              cy="610"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 274')}
              />
              <Circle
              cx="400"
              cy="625"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 275')}
              />
              <Circle
              cx="440"
              cy="635"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 276')}
              />
              <Circle
              cx="440"
              cy="670"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 277')}
              />
              <Circle
              cx="540"
              cy="635"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 278')}
              />
              <Circle
              cx="580"
              cy="650"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 279')}
              />
              <Circle
              cx="550"
              cy="690"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 280')}
              />
              <Circle
              cx="570"
              cy="680"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 281')}
              />
              <Circle
              cx="595"
              cy="680"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 282')}
              />
              <Circle
              cx="620"
              cy="700"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 283')}
              />
              <Circle
              cx="590"
              cy="720"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 284')}
              />
              <Circle
              cx="560"
              cy="780"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 285')}
              />
              <Circle
              cx="500"
              cy="780"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 286')}
              />
            <Circle
              cx="520"
              cy="840"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 287')}
              />
            <Circle
              cx="600"
              cy="740"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 288')}
              />
              <Circle
              cx="580"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 289')}
              />
              <Circle
              cx="620"
              cy="750"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 290')}
              />
              <Circle
              cx="635"
              cy="790"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 291')}
              />
              <Circle
              cx="600"
              cy="790"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 292')}
              />
            <Circle
              cx="520"
              cy="710"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 293')}
              />
              <Circle
              cx="620"
              cy="830"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 294')}
              />
              <Circle
              cx="600"
              cy="850"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 295')}
              />
              <Circle
              cx="620"
              cy="890"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 296')}
              />
              <Circle
              cx="620"
              cy="930"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 297')}
              />
            <Circle
              cx="600"
              cy="610"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 298')}
            />
              <Circle
              cx="680"
              cy="710"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 299')}
            />
              <Circle
              cx="680"
              cy="810"
              r="5"
              fill="red"
              onPress={() => handlePointPress('Point 300')}
            />


            {/* Add more circles or other shapes as needed */}
          </Svg>
        </ImageBackground>

        {/* <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{selectedPoint}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={{fontSize: 20}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}



<Modal
            transparent={true}
            visible={isModalVisible}
            onRequestClose={closeModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={styles.modalText}>{selectedPoint}</Text>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                </View>
            </View>
            </Modal>
      </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Test2;