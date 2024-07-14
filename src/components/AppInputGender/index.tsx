import React from "react";
import { GenderContainer, GenderText} from './styles';

type AppInputGenderProps = {
  gender: string;
}

export function AppInputGender({gender}: AppInputGenderProps){
  return(
    <GenderContainer>
      <GenderText>{gender}</GenderText>
    </GenderContainer>
  )
}
