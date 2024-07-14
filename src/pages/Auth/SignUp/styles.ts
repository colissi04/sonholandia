import { TouchableOpacity } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  align-items: 'center'; 
  justify-content: 'center'; 
  width: 100%;
  padding: 40px;
`;

export const TermsOfServiceContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const TermsOfServiceText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.sm}px;
    text-align: center;
  `}
`;

export const HighlightText = styled.Text<{ color: string }>`
  color: ${(props) => props.color}
`;
