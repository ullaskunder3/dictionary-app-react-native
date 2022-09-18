import { View, Text, TouchableHighlight, StyleSheet, TextInput, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import fetchDictionaryData from "../api/fetchData";

const validFiledInput = (string:string) => {
    let regex = new RegExp("^[a-zA-Z ]+$");
    return regex.test(string);
};
function tostMessage(msg: string) {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        Alert.alert(msg);
    }
}
export const Home = (props:any)=> {
    const [inputWord, setInputWord] = useState<string>('')

    const changeHandler = (e: string) => {
        let checkString = validFiledInput(e);
        if(checkString){
            setInputWord(e)
        } else if (e.length < 1){
            setInputWord(e)
        }else{
            tostMessage('Invalid Input: Only Strings')
        }
    }
    
    const submitHandler = () => {
        if (inputWord.length > 1 ) {
            fetchDictionaryData(inputWord)
                .then(response => {                                        
                    if(response !== '404'){
                        props.navigation.navigate('Result', {
                            countryData: {
                                "capital": response[0].capital,
                                "population": response[0].population,
                                "lat_Lon": response[0].latlng,
                                "flags": response[0].flags
                            }
                        })
                    }else{
                        tostMessage('incorrect country name')
                        setInputWord('');
                    }
                    setInputWord('');
                }).catch(() => {
                    tostMessage('incorrect country name')
                    setInputWord('');
                })
        } else {
            tostMessage('Invalid Input')
        }
    }

    return(
        <View style={styles.conatiner}>  
        <View style={styles.searchCompnent}>
          <TextInput
            style={styles.input}
            onChangeText={changeHandler}
            value={inputWord}
            placeholder={'Enter Keywork...'}
            keyboardType={'web-search'} />
  
          <TouchableHighlight
            style={styles.searchBtn}
            onPress={() => {console.log('did run')}}>
            <Text style={styles.searchBtnTxt}>Search</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.wotd__container}>
          <View>
            <Text style={styles.wotd__container_text}>Word of the day</Text>
          </View>
          <View>
            <View style={styles.wordOfTheDay}>
              <Text style={styles.wordOfTheDay_text}>quiddity</Text>
              <View>
                <View style={styles.wotd_spell}>
                  <Text style={styles.wordSpell}>[kwid-i-tee]</Text>
                  <TouchableHighlight
                  underlayColor={'#007ac677'}
                    onPress={() => { }}>
                    <Ionicons name="volume-high" size={24} color="black" />
                  </TouchableHighlight>
                </View>
                <View>
                  <Text style={styles.wotd_defination}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nesciunt
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 30,
      backgroundColor: '#eef6f8ee'
    },
    searchCompnent: {
      flexDirection: 'row',
    },
    input: {
      backgroundColor: 'white',
      flex: 2,
      paddingHorizontal: 10,
      borderBottomLeftRadius: 9,
      borderTopLeftRadius: 9,
    },
    searchBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007bc6',
      paddingVertical: 10,
      borderBottomRightRadius: 9,
      borderTopRightRadius: 9,
    },
    searchBtnTxt: {
      color: 'white',
      paddingHorizontal: 10,
    },
    wotd__container:{
      marginTop: 20,
      flex: 1,
  
      marginVertical: 20,
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    wotd__container_text:{
      fontWeight: '300',
      fontSize: 30,
      paddingVertical: 15,
    },
    wordOfTheDay: {
      borderColor: '#007bc6',
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: 'white',
      borderRadius: 10,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
  
      elevation: 4,
    },
    wordOfTheDay_text:{
      color: '#007bc6',
      fontSize: 40,
    },
    wotd_spell:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20
    },
    wotd_defination:{
      fontSize: 20,
      color: '#555'
    },
    wordSpell:{
      fontSize: 15,
      fontWeight: 'bold',
      marginRight: 10,
    }
  })