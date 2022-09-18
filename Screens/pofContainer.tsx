import { useContext, useEffect, useState } from "react";
import { StatusBar, View, Text, TouchableHighlight, StyleSheet, TextInput, FlatList, ToastAndroid, Platform, Alert } from "react-native";

export const PofContainer = ({ list, pof }:{list: any, pof:string}) => {
    const capitalizedPof = pof.charAt(0).toUpperCase() + pof.slice(1);
    return (
        <View style={styles.pof_container}>
            <Text style={styles.pof_text}>{capitalizedPof}:</Text>
            {
                list
                .filter((item: { pof: string; }) => item.pof === pof)
                .slice(0, 1)
                .map((item:{def:string, ex:string}, idx:number) => {
                    return (
                        <View key={idx}>
                            <Text>{item.def}</Text>
                            <Text>ex: {item.ex}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    pof_container: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#555',
        borderBottomWidth: 1
    },
    pof_text: {
        fontSize: 20,
    }
})