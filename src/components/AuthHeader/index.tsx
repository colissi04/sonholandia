import React from 'react';
import { AuthHeaderView, PrimaryText, SecondaryText} from './styles';

type AuthHeaderProps = {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps){
  return(
    <AuthHeaderView>
      <PrimaryText>
        {title}
      </PrimaryText>
      
      <SecondaryText>
        {subtitle}
      </SecondaryText>
    </AuthHeaderView>
  )
}
