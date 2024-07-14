import React from "react";
import { AppBackgroundContainer } from './styles';
import { LinearGradientProps } from "expo-linear-gradient";

export function AppBackground({ children, ...props }: LinearGradientProps){
  return(
    <AppBackgroundContainer {...props}>
      {children}
    </AppBackgroundContainer>
  )
}
