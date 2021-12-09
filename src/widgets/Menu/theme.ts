import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export interface NavThemeType {
  background: string;
}


export const light: NavTheme = {
  background: lightColors.background,
};

export const dark: NavThemeType = {
  background: darkColors.backgroundAlt,
};
