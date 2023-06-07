import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const {title, photo, email,seat} = route.params;

  return (
    <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
        <Image source={route.params.photo} style={styles.photoStyle} />
        </View>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{route.params.title}</Text>
      <Text style={{fontSize: 30}}>{route.params.seat}</Text>
      <Text style={{fontSize: 30}}>{route.params.email}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    photoStyle: {
        width: 250,
        height: 350,
        
      },
    });

export default Details