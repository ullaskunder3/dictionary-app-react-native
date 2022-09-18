import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Appearance } from 'react-native';

export default function App() {
  const [theme, setTheme] = useState('');
  Appearance.addChangeListener((app)=>{
    if(app.colorScheme === 'light'){
      setTheme('white')
    }else{
      setTheme('black')
    }
  })

  return (
    <View style={[styles.container, {backgroundColor: theme}]}>
      <Text style={{color: theme ==='black'?'white':'black'}}>{theme}</Text>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
