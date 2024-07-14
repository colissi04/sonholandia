import styled, { css, DefaultTheme } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const GenderContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  ${({ theme }: {theme:DefaultTheme}) => css`
    height: 48px;
    width: 90px;
    border: 2px solid ${theme.colors.yellow_200};
    border-radius: 25px;
    justify-content: center;
    align-items: center;
  `}
`;

export const GenderText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.yellow_200};
  `}
`;
