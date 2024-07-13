import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/src/theme/theme';

import { StatusBar } from 'react-native';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Login } from '@/src/pages/Auth/Login';
import { Loading } from '@/src/components/Loading';

export default function Index() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor='#141135'
      />

      { fontsLoaded ? <Login /> : <Loading /> }
    </ThemeProvider>
  );
}
