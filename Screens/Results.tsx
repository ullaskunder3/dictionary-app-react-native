import { View, Text, FlatList, TouchableHighlight, StyleSheet, TextInput, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import fetchDictionaryData from "../api/fetchData";

const Item = ({ title, defination }:{title:string, defination:string}) => {
  const shortDefination = defination.length<40?defination:defination.substring(0, 50)+'...';
  return(
  <View style={styles.listItems}>
    <Text style={styles.listItemTitle}>{title}</Text>
    <Text style={styles.listItemDefination}>{shortDefination}</Text>
  </View>
  )
};

export const Result = ({ data }:any) => {
  
  const renderItem = ({ item }: any) => {
    // console.log(item);
    const {meanings:[{definitions:[{definition}]}], word} = item
    
    // console.log("MEANING---",item.meanings[0]["definitions"][0]["definition"]);
    return(<Item title={item.word} defination={definition}  />)
  };

  return (
    <FlatList
      style={styles.searchedResults}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
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
  listItemTitle:{
    color: '#007bc6',
    fontSize: 20,
    paddingVertical: 10
  },
  listItemDefination:{
    color: '#555',
    paddingBottom: 15,
  }
})