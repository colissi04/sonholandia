import { SafeAreaView, Text } from "react-native";

import { AuthImage } from '../../../components/AuthImage';

import loginImageBackground from '../../../assets/loginScreenBackground.png';

export function Login(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <AuthImage source={loginImageBackground}>

        <Text style={{color: 'red'}}>
          ola mundo
        </Text>
        <Text style={{color: 'red'}}>
          ola mundo
        </Text>
        <Text style={{color: 'red'}}>
          ola mundo
        </Text>
        
      </AuthImage>
    </SafeAreaView>
  )
}
