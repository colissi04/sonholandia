import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

interface SpinnerProps {
  theme: DefaultTheme;
}

export const Container = styled.View<{ theme: DefaultTheme }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme } ) => theme.colors.purple_700};
`;

export const Spinner = styled.ActivityIndicator.attrs<SpinnerProps>(({ theme }) => ({
  color: theme.colors.yellow_700,
}))<SpinnerProps>``;
