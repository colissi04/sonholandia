import React from "react";
import { 
  HeaderContainer, 
  ReturnContainer, 
  ReturnIcon, 
  ReturnText, 
  HeaderTitle, 
  HeaderTitleContainer,
  ReturnButton, 
} from './styles';

export function AppHeader(){
  return(
    <HeaderContainer>

      <ReturnContainer>
        <ReturnButton>
          <ReturnIcon name="chevron-left" size={38} color={'#E29631'} />
          <ReturnText>Voltar</ReturnText>
        </ReturnButton>
      </ReturnContainer>

      <HeaderTitleContainer>
        <HeaderTitle>Defina sua história</HeaderTitle>
      </HeaderTitleContainer>

    </HeaderContainer>
  )
}
