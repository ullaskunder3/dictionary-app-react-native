import { StatusBar, View, Text, TouchableHighlight, StyleSheet, TextInput, FlatList, ToastAndroid, Platform, Alert } from "react-native";

export const Word = ({ route }: any) => {

    const { word, phonetic, phonetics, meanings: [{ definitions: [{ definition }], partOfSpeech }], license, sourceUrls } = route.params;

    return (
        <View style={styles.conatiner}>
            <StatusBar hidden />
            <View style={styles.word__container}>
                <Text>{word}</Text>
                <Text>Pronunciation: {phonetic}</Text>
            </View>
            <View style={styles.word__detail}>
                <Text>{partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}</Text>
                <Text>
                    {definition}
                </Text>
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
    word__detail:{
        marginTop: 10,
        flex: 2,

        marginVertical: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    }
})