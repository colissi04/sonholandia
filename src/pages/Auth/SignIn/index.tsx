import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import loginImageBackground from '../../../assets/loginScreenBackground.png';

import { 
  Container, 
  DividingContainer, 
  DividingLine, 
  OrText,
  ForgotPasswordContainer,
  ForgotPasswordText,
  CreateAccountContainer,
  DoNotHaveAccount,
  CreateAccount
} from "./styles";

import { AuthImage } from '../../../components/AuthImage';
import { AuthHeader } from "@/src/components/AuthHeader";
import { AuthInput } from "@/src/components/AuthInput";
import { AuthButton } from "@/src/components/AuthButton";
import { OAuthButon } from "@/src/components/OAuthButton";

export function SignIn(){

  return(
    <SafeAreaView style={{flex: 1}}>
      <AuthImage source={loginImageBackground}>

        <Container>
          <AuthHeader title="Login" subtitle="Crie histórias incríveis para sonhos       mágicos." />
          <AuthInput placeholder="Email" />
          <AuthInput placeholder="Senha" haveIcon/>

          <ForgotPasswordContainer>
            <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
          </ForgotPasswordContainer>

          <AuthButton btnText="Login"/>

          <CreateAccountContainer>
            <DoNotHaveAccount>Não possui uma conta?</DoNotHaveAccount>
            <CreateAccount>Criar conta</CreateAccount>
          </CreateAccountContainer>

          <DividingContainer>
            <DividingLine />
            <OrText>ou</OrText>
            <DividingLine />
          </DividingContainer>

          <OAuthButon icon="apple" name="Apple" />
          <OAuthButon icon="google" name="Google" />

        </Container>
        
      </AuthImage>
    </SafeAreaView>
  )
}
