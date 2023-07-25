import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  Dimensions,
  FlatList,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import Styles from './styles';
import CustomCard from '../../Components/CustomCard';
import CustomSearchBox from '../../Components/CustomSearchBox';
import CustomHeader from '../../Components/CustomHeader';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const CountryDetail = props => {
  const [loading, setLoading] = useState(false);
  const [countryDetail, setCountryDetail] = useState({})
  

  useEffect(() => {
    console.log("PROPS ROUTE", props.route.params.countryItem)
    setLoading(true)
    setCountryDetail(props.route.params.countryItem);
    setLoading(false)
  }, [props.navigation]);

  return (
    <View style={Styles.mainView}>
      <SafeAreaView style={Styles.mainView}>
        <CustomHeader
          leftOnPress={() => props.navigation.goBack()}
          title={'Details'}
        />

        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <View style={Styles.submainView}>
            <CustomCard
              FlagHeight={screenHeight / 2}
              FlagWidth={screenWidth / 1.5}
              disabled={true}
              flagUrl={countryDetail?.flags?.png}
              countryName={countryDetail?.name?.common}
              marginHorizontal={30}
            />
            <View>
              <Text>{countryDetail?.translations?.cym?.official}</Text>
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default CountryDetail;
