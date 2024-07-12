import styled, { css, DefaultTheme } from "styled-components/native";
import { theme } from "@/src/theme/theme";
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.black};
  border-radius: 10px;
  padding: 0 15px 0 15px;
  margin-bottom: 12px;
`;

export const TextInput = styled.TextInput`
    ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.white};
    flex: 1;
  `}
`;

export const EyeIcon = styled(Icon)`
    ${({ theme }: {theme:DefaultTheme}) => css`
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.gray_500};
  `}
`;
