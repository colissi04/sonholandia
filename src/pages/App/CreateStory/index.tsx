import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";

import { 
  ScrollView, 
  AppSlider, 
  AppSliderWrapper
} from "./styles";

import { AppBackground } from "@/src/components/AppBackground";
import { AppHeader } from "@/src/components/AppHeader";
import { AppInputTitle } from "@/src/components/AppInputTitle";
import { AppInput } from "@/src/components/AppInput";
import { AppInputGender } from "@/src/components/AppInputGender";

export function CreateStory(){
  const [age, setAge] = useState<number>(1);
  const [years, setYears] = useState<string>('ano');

  useEffect(() => {
    if(age > 1){
      setYears('anos')
    } else {
      setYears('ano')
    }
  }, [age])

  return(
    <SafeAreaView style={{ flex: 1}}>
      <AppBackground colors={['#141135','#372DA7']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
        <AppHeader />

        <ScrollView>
          <AppInputTitle title="Nome da criança"/>
          <AppInput 
            autoCapitalize="words"
          />

          <AppInputTitle title={`Idade da criança: ${age} ${years}`} />

          <AppSliderWrapper>
            <AppSlider 
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={age}
              onValueChange={setAge}
            />
          </AppSliderWrapper>

          <AppInputTitle title="Gênero"/>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 15}}>
            <AppInputGender gender="Menino" />
            <AppInputGender gender="Menina" />
            <AppInputGender gender="Outro" />
          </View>

          <AppInputTitle title="Onde a história se passa?"/>
          <AppInput 
            multiline
            numberOfLines={5}
            style={{ height: 70 , paddingTop: 10, paddingBottom: 10}}
            textAlignVertical="top"
          />

          <AppInputTitle title={`Faça uma breve descrição ${'\n'}da história...`}/>
          <AppInput 
            multiline
            numberOfLines={5}
            style={{ height: 70 , paddingTop: 10, paddingBottom: 10}}
            textAlignVertical="top"
          />

          <AppInputTitle title="Personagens adicionais" />

        </ScrollView>

      </AppBackground>
    </SafeAreaView>
  )
}
