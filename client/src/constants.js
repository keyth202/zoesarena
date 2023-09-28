export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};
export const lightTheme = theme => theme.palette.mode === "light";
export const secondarySideBarGap = 80;
export const secondarySideBarWidth = 215;
export const initialThemeSettings = {
  direction: "ltr",
  theme: THEMES.LIGHT,
  activeLayout: "layout3",
  responsiveFontSizes: true
};