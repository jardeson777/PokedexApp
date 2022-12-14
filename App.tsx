import theme from '@/global/styles/theme';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
