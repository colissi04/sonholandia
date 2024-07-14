import React from "react";
import { TextInputProps } from "react-native";
import { AppInputContainer } from './styles';

export function AppInput({...props}: TextInputProps){
  return(
    <AppInputContainer {...props}/>
  )
}
