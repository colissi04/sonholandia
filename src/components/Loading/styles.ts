import styled from 'styled-components/native';
import { Theme } from '@/src/theme/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${ Theme.colors.purple_700 };
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: Theme.colors.yellow_700,
})``;
