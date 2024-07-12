import React, { useState } from "react";
import { Container, EyeIcon, TextInput} from './styles';
import { TextInputProps, TouchableOpacity } from "react-native";

type AuthInputProps = {
  placeholder: string;
  iconName?: string;
  haveIcon?: boolean;
} & TextInputProps;

export function AuthInput({ placeholder, iconName, haveIcon, ...rest }: AuthInputProps){
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [currentIconName, setCurrentIconName] = useState('eye-off');

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);

    if(currentIconName === 'eye-off'){
      setCurrentIconName('eye')
    } else{
      setCurrentIconName('eye-off')
    }
  };

  return(
    <Container>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={'#72757E'}
        secureTextEntry={haveIcon ? secureTextEntry : false}
        {...rest}
      />

      {haveIcon &&
        <TouchableOpacity onPress={toggleSecureEntry}>
          <EyeIcon name={currentIconName} />
        </TouchableOpacity>
      }
    </Container>
  )
}
