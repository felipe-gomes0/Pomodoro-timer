// .d.ts -> extensao de arquivo que so tem tipagem ou seja, apenas codigo na linguagem TypeScript

/* 
    Arquivo para definir uma tipagem para ThemeType
 */

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {} 
}