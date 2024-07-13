import { TouchableOpacity } from "react-native";
import styled, {css, DefaultTheme} from "styled-components/native";

export const Container = styled.View`
  align-items: 'center'; 
  justify-content: 'center'; 
  width: 100%;
  padding: 40px;
`;

export const ForgotPasswordContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  margin-top: 2px;
  margin-bottom: 28px;
`;

export const ForgotPasswordText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.yellow_700};
  `}
`;

export const CreateAccountContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4
})`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
`;

export const DoNotHaveAccount = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.gray_100};
  `}
`;

export const CreateAccount = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.yellow_700};
  `}
`;

export const DividingContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const DividingLine = styled.View`
  ${({ theme }: {theme:DefaultTheme}) => css`
    flex: 1;
    height: 1px;
    background-color: ${theme.colors.gray_500};
  `}
`;

export const OrText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.gray_100};
    text-align: center;
    margin: 0 8px 0 8px;
  `}
`;
