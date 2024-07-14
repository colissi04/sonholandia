import React from "react";
import { InputTitleText } from './styles';

type InputTitleTextProps = {
  title: string;
}

export function AppInputTitle({ title }: InputTitleTextProps){
  return(
    <InputTitleText>{title}</InputTitleText>
  )
}
