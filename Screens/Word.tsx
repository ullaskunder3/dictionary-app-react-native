import { useContext, useEffect, useRef, useState } from "react";
import { StatusBar, View, Text, TouchableHighlight, StyleSheet, TextInput, FlatList, ToastAndroid, Platform, Alert } from "react-native";
import { DictionaryContext } from "../Context/ductionaryAppContext";
import { PofContainer } from "./pofContainer";
import SoundPlayer from 'react-native-sound-player'
import PlayAudio from "./PlayAudio";

export const Word = ({ route }: any) => {
    const { dictionaryData } = useContext(DictionaryContext)
    const { word, phonetic } = route.params;
    const [phoneticsAud, setPhoneticsAud] = useState<any[]>([])
    const [list, setList] = useState<any>([]);

    useEffect(() => {
        dictionaryData.map((item: { [x: string]: { [x: string]: any; }; meanings?: any; }) => {
            setPhoneticsAud((prev:any) => [...prev, item["phonetics"]["0"]["audio"]])
            
            const { meanings } = item
            meanings.map((element: { [x: string]: any[]; }) => {
                const partOfSpeach = element["partOfSpeech"]
                element["definitions"].map(element => {
                    const defination = element["definition"]
                    const example = element["example"]

                    const updatedData = {
                        pof: partOfSpeach, def: defination, ex: example
                    }

                    setList((prevState: any) => [...prevState, updatedData])
                });
            });
        }) 
        
    },[])

    return (
        <View style={styles.conatiner}>
            <StatusBar hidden />
            <View style={styles.word__container}>
                <Text>{word}</Text>
                <Text>Pronunciation: {phonetic}</Text>
            </View>
            <View style={styles.word__detail}>

            <PofContainer list={list} pof={"verb"} />
            <PofContainer list={list} pof={"noun"} />
            <PofContainer list={list} pof={"adverb"} />

            <PlayAudio phoneticsAud={phoneticsAud[0]} />
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
    word__container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    word__detail: {
        marginTop: 10,
        flex: 2,

        marginVertical: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    pof_container:{
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#555',
        borderBottomWidth: 1
    },
    pof_text:{
        fontSize: 20,
    },
    playIcon_container:{
        flex: 1,
        justifyContent: 'flex-end'
    }
})