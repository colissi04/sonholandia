import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/src/theme/theme';

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
      { fontsLoaded ? <Login /> : <Loading /> }
    </ThemeProvider>
  );
}
