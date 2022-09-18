import { StatusBar, View, Text, TouchableHighlight, StyleSheet, TextInput, FlatList, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState, useContext } from "react";
import fetchDictionaryData from "../api/fetchData";
import { RandomWord } from "./RandomWord";
import { DictionaryContext } from "../Context/ductionaryAppContext";
import { Result } from "./Results";

const validFiledInput = (string: string) => {
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

export const Home = (props: any) => {
  const [inputWord, setInputWord] = useState<string>('')
  const { dictionaryData, setDictionaryData } = useContext(DictionaryContext)

  const changeHandler = (e: string) => {
    let checkString = validFiledInput(e);
    if (checkString) {
      setInputWord(e)
    } else if (e.length < 1) {
      setInputWord(e)
    } else {
      tostMessage('Invalid Input: Only Strings')
    }
  }

  const submitHandler = () => {
    setDictionaryData([])
    if (inputWord.length > 1) {
      fetchDictionaryData(inputWord)
        .then(response => {
          if (response !== '404') {
            // console.log(response);
            setDictionaryData(response)
          } else {
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

  return (
    <View style={styles.conatiner}>
      <StatusBar hidden />
      <View style={styles.searchCompnent}>
        <TextInput
          style={styles.input}
          onChangeText={changeHandler}
          value={inputWord}
          placeholder={'Enter Keywork...'}
          keyboardType={'web-search'} />

        <TouchableHighlight
          style={styles.searchBtn}
          onPress={submitHandler}>
          <Text style={styles.searchBtnTxt}>Search</Text>
        </TouchableHighlight>
      </View>
      {
        dictionaryData.length != 0
          ?<Result data={dictionaryData}
          />
          : <RandomWord />
      }
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
  wotd__container: {
    marginTop: 20,
    flex: 1,

    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  wotd__container_text: {
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
  wordOfTheDay_text: {
    color: '#007bc6',
    fontSize: 40,
  },
  wotd_spell: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  wotd_defination: {
    fontSize: 20,
    color: '#555'
  },
  wordSpell: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  }
})