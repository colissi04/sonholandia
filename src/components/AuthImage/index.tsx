import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { AuthImageBackground } from './styles';

type AuthImageProps = {
  source: ImageSourcePropType;
  children: ReactNode;
}

export const AuthImage = ({source, children}: AuthImageProps) => {
  return(
    <AuthImageBackground source={source}>
      {children}
    </AuthImageBackground>
  )
}