import styled, { css, DefaultTheme} from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import magicWand from '../../../assets/magic-wand.png';

export const HomeContainer = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.xl}px;
    color: ${theme.colors.yellow_300};
    margin: 15px 0 10px 0;
  `}
`;

export const Subtitle = styled.Text`
    ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.md}px;
    color: 'rgba(255, 255, 255, 0.4)';
    text-align: center;
  `}
`;

export const CreateStoryButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  ${({ theme }: {theme:DefaultTheme}) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.yellow_700};
    border-radius: 30px;
    width: 250px;
    height: 70px;
    gap: 7px;
    margin-top: 86px;
    margin-bottom: 24px;
  `}
`;

export const CreateStoryButtonText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const CreateStoryButtonIcon = styled.Image.attrs({
  source: magicWand
})``;

export const ShowHistory = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})``;

export const ShowHistoryText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.sm}px;
    color: '#D6D6D6';
  `}
`;

export const Cookies = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 34px;
`;

export const CookiesText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: 24px;
    color: ${theme.colors.gray_100};
    margin-right: 6px;
  `}
`;

export const CookiesIcon = styled(Icon)``;
