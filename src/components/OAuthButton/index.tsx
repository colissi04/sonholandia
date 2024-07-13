import React from "react";
import { OAuthButtonContainer, OAuthButtonIcon, OAuthButtonText} from './styles';

type OAuthButtonProps = {
  icon: string;
  name: string;
}

export function OAuthButon({icon, name}: OAuthButtonProps){
  return(
    <OAuthButtonContainer>
      <OAuthButtonIcon name={icon} size={38} />
      <OAuthButtonText>Fazer login com {name}</OAuthButtonText>
    </OAuthButtonContainer>
  )
}
