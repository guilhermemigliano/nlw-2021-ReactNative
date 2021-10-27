import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StyleSheet, SafeAreaView } from 'react-native';
import { COLORS } from './src/theme/colors'
import { StatusBar } from 'expo-status-bar';


import { AuthProvider } from './src/hooks/auth'
import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={styles.container}>

      <AuthProvider>
        <StatusBar style="light" translucent backgroundColor="transparent"/>
        <Home />
      </AuthProvider>      

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY
  },
});


