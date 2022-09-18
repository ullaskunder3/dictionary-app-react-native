import { View, Text, TouchableHighlight, StyleSheet, TextInput, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import fetchDictionaryData from "../api/fetchData";

export const Result = (props: any) => {

  return (
    <View style={styles.conatiner}>

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
})