import 'styled-components';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      textDefault: string;
      bounceDefault: string;
    };
    animation: {
      delayTimeDefault: string;
    };
  }
}
