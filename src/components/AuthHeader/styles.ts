import styled, { css, DefaultTheme} from "styled-components/native";

export const AuthHeaderView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const PrimaryText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.xl}px;
    color: ${theme.colors.white}
  `}
`;

export const SecondaryText = styled.Text`

`;
