import styled, { css, DefaultTheme } from "styled-components/native";

export const AppInputContainer = styled.TextInput`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.yellow_700};
    height: 48px;
    border: 2px solid ${theme.colors.yellow_700};
    border-radius: 10px;
    padding: 0 12px 0 12px;
    margin-bottom: 15px;
  `}
`;
