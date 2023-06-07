import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = ({navigation}) => {
  let listViewRef;
  const [dataSource, setDataSource] = useState([
    { id: 1, title: 'Sakura', photo: require('./assets/x1.jpg'), seat: 'First Seat', email: 'Sakura@yahoo.com'},
    { id: 2, title: 'Riko', photo: require('./assets/x2.jpg'), seat: 'Second Seat', email: 'Riko@yahoo.com' },
    { id: 3, title: 'Aoi', photo: require('./assets/x3.jpg'), seat: 'Third Seat', email: 'Aoi@yahoo.com' },
    { id: 4, title: 'Wakana', photo: require('./assets/x4.jpg'), seat: 'Fourth Seat', email: 'Wakana@yahoo.com' },
    { id: 5, title: 'Sakura Sara', photo: require('./assets/x5.jpg'), seat: 'Fifth Seat', email: 'Sakura Sara@yahoo.com' },
    { id: 6, title: 'Alice Nakiri', photo: require('./assets/x6.jpg'), seat: 'Sixth Seat', email: 'Alice@yahoo.com' },
    { id: 7, title: 'Anna', photo: require('./assets/x7.jpg'), seat: 'Seventh Seat', email: 'Anna@yahoo.com' },
    { id: 8, title: 'Himari', photo: require('./assets/x8.jpg'), seat: 'Eighth Seat', email: 'Himari@yahoo.com' },
    { id: 9, title: 'Yuna', photo: require('./assets/x9.jpg'), seat: 'Ninth Seat', email: 'YUna@yahoo.com' },
    { id: 10, title: 'Kaede', photo: require('./assets/x10.jpg'), seat: 'Tenth Seat', email: 'Kaede@yahoo.com' },

  ]);

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#9c15c1", "#52dffb"]}
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 20,
            alignItems: 'center',
            borderRadius: 15,
          }}
        >
        <Image source = {item.photo} style={styles.photoStyle}>
        </Image>

      <Text style={styles.itemStyle} onPress={() => (item.title, navigation.navigate('Details', 
      {title:item.title,
      id:item.id,
      photo:item.photo,
      seat:item.seat,
    email:item.email})
      )}>
        {item.title.toUpperCase()}
       
      </Text>
      </LinearGradient>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert(' Title : ' + item.title);
  };
  const upButtonHandler = () => {
    //OnCLick of Up button we scrolled the list to top
    listViewRef.scrollToOffset({ offset: 0, animated: true });
  };

  const downButtonHandler = () => {
    //OnCLick of down button we scrolled the list to bottom
    listViewRef.scrollToEnd({ animated: true });
  };

 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
      />
      
      {/* <TouchableOpacity
        activeOpacity={0.5}
        onPress={upButtonHandler}
        style={styles.upButtonStyle}>

          
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png',
          }}
          style={styles.upButtonImageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={downButtonHandler}
        style={styles.downButtonStyle}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_down.png',
          }}
          style={styles.downButtonImageStyle}
        />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 50,
    fontSize: 24,
    left: 50,
    color: 'white',
    alignContent: 'center',
    marginLeft: 50,
  },
  photoStyle: {
    width: 50,
    height: 100,
    padding: 30,
    borderRadius: 10,
    left: 10, 
    position: 'absolute',
    marginLeft: 20,
  },
  upButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 70,
  },
  upButtonImageStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  downButtonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 70,
  },
  downButtonImageStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
});

export default App;