import React from 'react';
import { AuthHeaderView, PrimaryText, SecondaryText} from './styles';

export function AuthHeader(){
  return(
    <AuthHeaderView>
      <PrimaryText>
        Entre com sua conta
      </PrimaryText>
      
      <SecondaryText>
        Crie histórias incríveis para sonhos mágicos.
      </SecondaryText>
    </AuthHeaderView>
  )
}
