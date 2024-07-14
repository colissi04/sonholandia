import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/src/theme/theme';

import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { SignIn } from '@/src/pages/Auth/SignIn';
import { SignUp } from '@/src/pages/Auth/SignUp';
import { Home } from '@/src/pages/App/Home';
import { CreateStory } from '@/src/pages/App/CreateStory';


import { Loading } from '@/src/components/Loading';

export default function Index() {
  const [ statusBarStyle, setStatusBarStyle ] = useState<StatusBarStyle>('light');

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style={statusBarStyle}
        translucent
        backgroundColor={'#141135'}
      />

      { fontsLoaded ? <CreateStory /> : <Loading /> }
    </ThemeProvider>
  );
}
