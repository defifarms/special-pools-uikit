import { darkColors, lightColors } from "../../theme/colors";
import { DefifarmsToggleTheme } from "./types";

export const light: DefifarmsToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: DefifarmsToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
