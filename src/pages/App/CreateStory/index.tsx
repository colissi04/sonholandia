import { AppBackground } from "@/src/components/AppBackground";
import { AppHeader } from "@/src/components/AppHeader";
import React from "react";
import { SafeAreaView } from "react-native";

export function CreateStory(){
  return(
    <SafeAreaView style={{ flex: 1}}>
      <AppBackground colors={['#141135','#372DA7']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        <AppHeader />
      </AppBackground>
    </SafeAreaView>
  )
}
