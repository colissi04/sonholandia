import React from "react";
import { AuthButtonContainer, AuthButtonText } from './styles';

type AuthButtonProps = {
  btnText: string;
}

export function AuthButton({ btnText }: AuthButtonProps){
  return(
    <AuthButtonContainer>
      <AuthButtonText>{btnText}</AuthButtonText>
    </AuthButtonContainer>
  )
}
