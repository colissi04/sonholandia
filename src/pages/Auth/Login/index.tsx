import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import loginImageBackground from '../../../assets/loginScreenBackground.png';

import { Container } from "./styles";
import { AuthImage } from '../../../components/AuthImage';
import { AuthHeader } from "@/src/components/AuthHeader";
import { AuthInput } from "@/src/components/AuthInput";

export function Login(){

  return(
    <SafeAreaView style={{flex: 1}}>
      <AuthImage source={loginImageBackground}>

        <Container>
          <AuthHeader />
          <AuthInput placeholder="Email" />
          <AuthInput placeholder="Senha" haveIcon/>

        </Container>
        
      </AuthImage>
    </SafeAreaView>
  )
}
