import { StyleSheet, TouchableHighlight } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';


export default function PlayAudio({ phoneticsAud }) {    

    const [sound, setSound] = useState<any>();

    async function playRemoteSound() {
        console.log('Loading Sound', phoneticsAud);
        const { sound } = await Audio.Sound.createAsync({
            // uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
            uri: phoneticsAud,
        });
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        console.log(phoneticsAud);

        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <TouchableHighlight underlayColor={'transparent'} style={styles.playIcon_container} onPress={playRemoteSound}>
            <AntDesign name="playcircleo" size={50} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    playIcon_container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})