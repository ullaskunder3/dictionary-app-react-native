import { View, Text, FlatList, TouchableHighlight, TouchableOpacity, StyleSheet, TextInput, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from "react";
import fetchDictionaryData from "../api/fetchData";
import { DictionaryContext } from "../Context/ductionaryAppContext";

// const onClickHandler = (data, navigation)=>{
//     navigation.navigate('Dictionary')
// }

export const Result = ({ data, navigation }: any) => {

  const Item = ({item}) => {  

    const {phonetic, meanings: [{ definitions: [{ definition }] }], word } = item
  
    const shortDefination = definition.length < 40 ? definition : definition.substring(0, 50) + '...';

    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Dictionary', {word, phonetic})}>
        <View style={styles.listItems}>
          <Text style={styles.listItemTitle}>{word} data</Text>
          <Text style={styles.listItemDefination}>{shortDefination}</Text>
        </View>
      </TouchableOpacity>
    )
  };

  
  const renderItem = ({ item }: any) => {
    // console.log(item);
    // const { meanings: [{ definitions: [{ definition }] }], word } = item

    // console.log("MEANING---",item.meanings[0]["definitions"][0]["definition"]);
    // return (<Item title={item.word} defination={definition} />)
    return (<Item item={item} />)
  };

  const keyExtractor = (item: any, idx: number) => `${Object.keys(item)}-${idx}`  


  return (
    <FlatList
      style={styles.searchedResults}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

const styles = StyleSheet.create({
  searchedResults: {
    marginVertical: 20
  },
  listItems: {
    paddingHorizontal: 10,
    backgroundColor: '#fdfdfd',
    marginVertical: 5,
    borderRadius: 5
  },
  listItemTitle: {
    color: '#007bc6',
    fontSize: 20,
    paddingVertical: 10
  },
  listItemDefination: {
    color: '#555',
    paddingBottom: 15,
  }
})