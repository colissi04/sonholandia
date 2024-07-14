import React from "react";
import { Image, SafeAreaView } from "react-native";
import { 
  HomeContainer, 
  Title, 
  Subtitle, 
  TextContainer, 
  CreateStoryButton, 
  CreateStoryButtonText,
  CreateStoryButtonIcon,
  ShowHistory,
  ShowHistoryText, 
  Cookies,
  CookiesText,
  CookiesIcon
} from './styles';

import dreamland from '../../../assets/dreamland.png';

export function Home(){
  return(
    <SafeAreaView style={{ flex:1 }}>
      <HomeContainer colors={['#141135','#372DA7']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        <Image source={dreamland}/>

        <TextContainer>
          <Title>Sonholandia</Title>
          <Subtitle>Crie histórias mágicas e únicas para {'\n'} sua criança baseado em seus {'\n'} personagens favoritos. Toda noite é {'\n'} uma nova história.</Subtitle>
        </TextContainer>

        <CreateStoryButton>
          <CreateStoryButtonText>Criar História</CreateStoryButtonText>
          <CreateStoryButtonIcon />
        </CreateStoryButton>

        <ShowHistory>
          <ShowHistoryText>Ver histórias anteriores</ShowHistoryText>
        </ShowHistory>

        <Cookies>
          <CookiesText>3</CookiesText>
          <CookiesIcon name="cookie-bite" size={24} color={'#FFFFFF'} />
        </Cookies>
        
      </HomeContainer>
    </SafeAreaView>
  )
}
