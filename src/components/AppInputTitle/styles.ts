import styled, { css, DefaultTheme } from "styled-components/native";

export const InputTitleText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.white};
  `}
`;
