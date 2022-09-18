import { DictionaryContextProvider } from './Context/ductionaryAppContext'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DictionaryContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home} options={{ title: 'Dictionary' }} />
        {/* <Stack.Screen name="AsteroidInfo" component={AsteroidInfo} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </DictionaryContextProvider>
  )
}