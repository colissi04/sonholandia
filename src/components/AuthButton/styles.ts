import styled, {css, DefaultTheme} from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const AuthButtonContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  ${({ theme }: {theme:DefaultTheme}) => css`
    background-color: ${theme.colors.yellow_700};
    width: 100%;
    height: 50px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    margin-top: 20px;
  `}
`;

export const AuthButtonText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.white};
  `}
`;
