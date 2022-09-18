import { View, Text, TouchableHighlight, StyleSheet, TextInput, ToastAndroid, Platform, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const RandomWord = ()=> {

    return(
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
    )
}

const styles = StyleSheet.create({
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