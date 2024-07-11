import { SafeAreaView } from "react-native";

import { AuthImage } from '../../../components/AuthImage';

import loginImageBackground from '../../../assets/loginScreenBackground.png';

import { AuthHeader } from "@/src/components/AuthHeader";

export function Login(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <AuthImage source={loginImageBackground}>

        <AuthHeader />
        
      </AuthImage>
    </SafeAreaView>
  )
}
