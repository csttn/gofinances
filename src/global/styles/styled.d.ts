import 'styled-components/native';
import theme from './theme';

// Extendendo a tipagem do styled-components theme para as caracteristicas do meu tema

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  interface DefaultTheme extends ThemeType {}
}
