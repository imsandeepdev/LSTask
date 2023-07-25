import {StyleSheet,Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#EDE1D5',
  },
  submainView: {
    flex: 1,
  },
  countryText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  helloText: {
    fontSize: 14,
    fontWeight: '400',
  },
  topPickText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
export default Styles