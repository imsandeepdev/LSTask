import * as React from 'react';
import {Pressable, View, Text, Image, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const CustomHeader = props => {
  return (
    <View
      onPress={props.onPress}
      style={{
        height: 50,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      }}>
      <Pressable
      onPress={props.leftOnPress}
        style={{
          height: 50,
          width:50,
        }}>
        <Image
          source={{
            uri: 'https://icons.veryicon.com/png/o/miscellaneous/arrows/go-back-2.png',
          }}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
      </Pressable>
      <View
        style={{
          height: 50,
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
        <Text>{props.title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
