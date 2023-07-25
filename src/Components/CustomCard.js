import * as React from 'react';
import {Pressable,View, Text,Image,Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const CustomCard = (props) => {
    return (
      <Pressable
        disabled={props.disabled}
        onPress={props.onPress}
        style={({Pressed}) => [
          {
            marginHorizontal: 14,
            width: props.FlagWidth ? props.FlagWidth : screenWidth / 1.8,
            borderRadius: 20,
            opacity: Pressed ? 0.5 : 1,
          },
        ]}>
        <View
          style={{
            height: props.FlagHeight ? props.FlagHeight : screenHeight / 2.5,
            width: '100%',
            overflow: 'hidden',
            borderRadius: 20,
          }}>
          <Image
            source={{
              uri: props.flagUrl,
            }}
            resizeMode={'stretch'}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View
          style={{
            height: 30,
            borderRadius: 50,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            marginHorizontal: props.marginHorizontal,
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2838/2838912.png',
            }}
            resizeMode={'contain'}
            style={{height: 15, width: 15,marginHorizontal:3}}
          />
          <Text>{props.countryName}</Text>
        </View>
      </Pressable>
    );
}

export default CustomCard