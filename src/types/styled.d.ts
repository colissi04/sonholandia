import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      yellow_700: string;
      yellow_400: string;
      yellow_300: string;
      yellow_200: string;
      white: string;
      gray_100: string;
      gray_500: string;
      gray_700: string;
      black: string;
      purple_700: string;
      purple_500: string;
      purple_300: string;
      blue: string;
    },
    fonts: {
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    },
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    }
  }
}
