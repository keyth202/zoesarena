import { Montserrat } from "next/font/google";
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes, StyledEngineProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import merge from "lodash/merge";
import RTL from "components/RTL";
import { shadows } from "./shadows";
import { THEMES } from "../constants";
import components from "./components";
import themesOptions from "./themeOptions";
import useSettings from "hooks/useSettings";
export const monserrat = Montserrat({
  subsets: ["latin"] // display: "swap",
  // weight: ["300", "400", "500", "600", "700"],
  // fallback: ["Montserrat", "Arial", "sans-serif"],

});
const baseOptions = {
  direction: "ltr",
  typography: {
    fontFamily: monserrat.style.fontFamily
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
};

const createCustomTheme = settings => {
  /**
   * settings.theme value is 'light' or 'dark'
   * update settings in contexts/settingsContext.tsx
   */
  let themeOption = themesOptions[settings.theme];

  if (!themeOption) {
    themeOption = themesOptions[THEMES.LIGHT];
  }

  const mergedThemeOptions = merge({}, baseOptions, themeOption, {
    direction: settings.direction
  });
  let theme = createTheme(mergedThemeOptions); // set shadows

  theme.shadows = shadows(theme); // set components

  theme.components = components(theme);

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

const OctaviaTheme = ({
  children
}) => {
  const {
    settings
  } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  });
  return <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <RTL>
            <CssBaseline />
            {children}
          </RTL>
        </ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>;
};

export default OctaviaTheme;