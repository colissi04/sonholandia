import styled, { css, DefaultTheme} from "styled-components/native";

export const AuthHeaderView = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const PrimaryText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.xl}px;
    color: ${theme.colors.white};
    text-align: center;
  `}
`;

export const SecondaryText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.gray_100};
    text-align: center;
  `}
`;
