export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  homeCorner: string;
  circle: string;
  rounded: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
  tooltip: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type DefifarmsToggle = {
  handleBackground: string;
  handleShadow: string
}

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  backgroundAlt2: string;
  backgroundCard: string;
  backgroundCardTransparent: string;
  backgroundCardAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;
  third: string;
  subNav: string;
  hoverNav: string;
  textHoverNav: string;
  inputBackground: string;
  white: string;
  cyan: string;
  four: string;
  
  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;
  royalBlue: string;
  linkText: string;
  whiteLilac: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
