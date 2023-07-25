import * as React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';

const CustomSearchBox = React.forwardRef((props, ref) => {
  return (
    <View
      style={{
        flex: props.flex,
        height: 40,
        borderRadius: 30,
        flexDirection: 'row',
        borderWidth: 1,
      }}>
      
        <View
          style={{
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 6,
          }}>
          <Image
            source={{
              uri: 'https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png',
            }}
            resizeMode={'cover'}
            style={{height: 20, width: 20}}
          />
        </View>
      

      <TextInput
        style={style.textInputStyle}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
});
export default CustomSearchBox;

const style = StyleSheet.create({
  textInputStyle: {
    
    height: 40,
    fontWeight: '500',
    flex: 1,
  },
});
