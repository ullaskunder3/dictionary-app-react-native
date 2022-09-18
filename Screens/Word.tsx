import { useContext, useEffect, useState } from "react";
import { StatusBar, View, Text, TouchableHighlight, StyleSheet, TextInput, FlatList, ToastAndroid, Platform, Alert } from "react-native";
import { DictionaryContext } from "../Context/ductionaryAppContext";

export const Word = ({ route }: any) => {
    const { dictionaryData, setDictionaryData } = useContext(DictionaryContext)
    const { word, phonetic } = route.params;
    const [partOfSpeech, setpartOfSpeech] = useState<string[]>([]);
    const [definations, setDefinations] = useState<string[]>([]);
    const [examples, setExamples] = useState<string[]>([]);
    const [list, setList] = useState<any[]>([]);

    // const {phonetic, meanings: [{ definitions: [{ definition }] }], word } = item


    useEffect(() => {
        dictionaryData.map((item) => {

            console.log('--------------start-----------');

            const {meanings} = item
            meanings.map(element => {
                // console.log("ex: pOS---",element["partOfSpeech"]);
                const partOfSpeach = element["partOfSpeech"]

                // setpartOfSpeech(prevState=>[...prevState, element["partOfSpeech"]])
                element["definitions"].map(element => {
                    const defination = element["definition"]
                    const example = element["example"]

                    // console.log("definition--*:",element["definition"]);
                    // console.log("example--*:",element["example"]);
                    // setDefinations(prevState=>[...prevState, element["definition"]])
                    // setExamples(prevState=>[...prevState, element["example"]])

                    // console.log("ther data---:", partOfSpeach, defination, example);
                    
                    setList(prevState=>[...prevState, partOfSpeach, defination, example])
                });
            });
            console.log('--------------end-----------');
        })
    }, [])

    return (
        <View style={styles.conatiner}>
            <StatusBar hidden />
            <View style={styles.word__container}>
                <Text>{word}</Text>
                <Text>Pronunciation: {phonetic}</Text>
            </View>
            <View style={styles.word__detail}>
                {/* <Text>{partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}</Text> */}
                {
                    list.map((item)=>{
                        console.log("---",item);
                        
                        return(
                            <Text>
                                {item}
                            </Text>
                        )
                    })
                }
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
    }
})