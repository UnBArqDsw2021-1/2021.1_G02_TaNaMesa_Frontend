import taNaMesaTheme from '../styles/taNaMesaTheme';

type ThemeInterface = typeof taNaMesaTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
