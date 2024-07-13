import styled, {css, DefaultTheme} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const OAuthButtonContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  ${({ theme }: {theme:DefaultTheme}) => css`
    background-color: ${theme.colors.gray_100};
    height: 50px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 18px;
  `}
`;

export const OAuthButtonIcon = styled(Icon)`
  margin-left: 16px;
`;

export const OAuthButtonText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.black};
    margin-left: 45px;
  `}
`;
