import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

export const ScrollView = styled.ScrollView`
  flex: 1;
  padding: 38px;
`;

export const AppSliderWrapper = styled.View`
  padding: 0 50px 0 50px;
  margin-bottom: 15px;
`;

export const AppSlider = styled(Slider).attrs({
  thumbTintColor: '#FFA500', 
  minimumTrackTintColor: '#FFA500', 
  maximumTrackTintColor: '#FFE4B5', 
})`
  height: 40px;
  transform: scale(1.5);
`;

