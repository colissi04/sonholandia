import React from "react";
import { SafeAreaView } from "react-native";

import createAccount from "../../../assets/createAccount.png";

import { AuthImage } from "@/src/components/AuthImage";
import { AuthHeader } from "@/src/components/AuthHeader";
import { AuthInput } from "@/src/components/AuthInput";
import { AuthButton } from "@/src/components/AuthButton";
import { Container, TermsOfServiceContainer, TermsOfServiceText, HighlightText } from './styles';

export function SignUp(){
  return(
    <SafeAreaView style={{ flex: 1}}>
      <AuthImage source={createAccount}>
        
        <Container>

          <AuthHeader title="Crie sua conta" subtitle="Comece a criar aventuras mágicas hoje mesmo!" />

          <AuthInput placeholder="Nome e sobrenome" />
          <AuthInput placeholder="Email" />
          <AuthInput placeholder="Senha" haveIcon/>
          <AuthInput placeholder="Confirmar senha" haveIcon/>

          <AuthButton btnText="Criar conta"/>

          <TermsOfServiceContainer>
            <TermsOfServiceText>
              <HighlightText color="#C5C5C5" >Ao continuar, você aceita nossos </HighlightText>
              <HighlightText color="#E29631" >Termos de Serviço </HighlightText>
              <HighlightText color="#C5C5C5" >e </HighlightText>
              <HighlightText color="#E29631" >Política de Privacidade</HighlightText>
            </TermsOfServiceText>
          </TermsOfServiceContainer>

        </Container>

      </AuthImage>
    </SafeAreaView>
  )
}
