import React from 'react';
import { AuthHeaderView, PrimaryText, SecondaryText} from './styles';

export function AuthHeader(){
  return(
    <AuthHeaderView>
      <PrimaryText>
        Login
      </PrimaryText>
      
      <SecondaryText>
        Crie histórias incríveis para sonhos {'\n'} mágicos.
      </SecondaryText>
    </AuthHeaderView>
  )
}
