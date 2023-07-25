import * as React from 'react';
import {useState, useEffect} from 'react';
import {View,SafeAreaView, Text, Image, Pressable,Dimensions, FlatList,ActivityIndicator, LogBox} from 'react-native'
import Styles from './styles';
import CustomCard from '../../Components/CustomCard';
import CustomSearchBox from '../../Components/CustomSearchBox';
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width;


const HomeScreen = (props) => {

    const [loading, setLoading] = useState(false)
    const [countryListData, setCountryListData] = useState([]);
    const [countryList, setCountryList]= useState([])
    const [searchText, setSearchText] = useState('')
    const [visibleItems, setVisibleItems] = useState(10);




    useEffect(()=>{
            handleCountryList();
    },[props.navigation])

    const handleCountryList = () => {
        setLoading(true)
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>{
            console.log("Country Data List=>",data)
            setCountryList(data)
            setCountryListData(data);
        setLoading(false);

        })
        
    }
  

     const handleLoadMore = () => {
       setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
     };

     const onProductSearch = text => {
       if (text) {
         const newData = countryList.filter(item => {
           const itemData = item.name.common
             ? item.name.common.toLowerCase()
             : ''.toLowerCase();
           const textData = text.toLowerCase();
           return itemData.indexOf(textData) > -1;
         });
         setCountryList(newData);
         setSearchText(text);
       } else {
         setCountryList(countryListData);
         setSearchText(text);
       }
     };

    return (
      <View style={Styles.mainView}>
        <SafeAreaView style={Styles.mainView}>
          {loading ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : (
            <View style={Styles.submainView}>
              <View style={{marginHorizontal: 20}}>
                <View style={Styles.countryText}>
                  <Text>{'Country'}</Text>
                </View>
                <View>
                  <Text style={Styles.helloText}>{'Hello Everyone'}</Text>
                </View>

                <View style={{marginVertical:20}}>
                  <CustomSearchBox
                    value={searchText}
                    onChangeText={text => onProductSearch(text)}
                  />
                </View>

                <Text style={Styles.topPickText}>{'Top picks for you'}</Text>
              </View>
              <View style={{flex: 1, marginVertical: 30}}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  keyExtractor={(item, index) => index.toString()}
                  data={!loading && countryList.slice(0, visibleItems)}
                  renderItem={({item, index}) => {
                    console.log('Item=>', item);
                    return (
                      <CustomCard
                        key={index}
                        onPress={() =>
                          props.navigation.navigate('CountryDetail', {
                            countryItem: item
                          })
                        }
                        flagUrl={item.flags.png}
                        countryName={item.name.common}
                      />
                    );
                  }}
                />
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <Pressable
                  onPress={() => handleLoadMore()}
                  style={{
                    height: 40,
                    width: 160,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#f1f1f1',
                    }}>
                    {'Refresh Data'}
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </SafeAreaView>
      </View>
    );
}

export default HomeScreen