import styled, { css, DefaultTheme} from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  position: relative;
`;

export const ReturnContainer = styled.View`
  position: absolute;
  left: 0;
  flex-direction: row;
  align-items: center;
`;

export const ReturnButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const ReturnIcon = styled(Icon)``;

export const ReturnText = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.yellow_700};
  `}
`;

export const HeaderTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }: {theme:DefaultTheme}) => css`
    font-family: ${theme.fonts.semibold};
    font-size: ${theme.fontSizes.lg}px;
    color: ${theme.colors.yellow_700};
    flex-direction: row;
    align-items: center;
  `}
`;
