import { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { initialThemeSettings } from "../constants";
export const SettingsContext = createContext({
  settings: initialThemeSettings,
  saveSettings: arg => {}
}); // ==============================================================

// ==============================================================
const SettingsProvider = ({
  children,
  defaultSettings
}) => {
  // const { data: settings, setData: setStoreSettings } = useLocalStorage(
  //   "settings",
  //   initialSettings
  // );
  // const saveSettings = (updateSettings: themeSettingsTypes) => setStoreSettings(updateSettings);
  const {
    settings,
    setSettings: saveSettings
  } = useSettingsCookie(defaultSettings);
  return <SettingsContext.Provider value={{
    settings,
    saveSettings
  }}>
      {children}
    </SettingsContext.Provider>;
};

const useSettingsCookie = defaultSettings => {
  const [settings, setSettings] = useState(defaultSettings);

  const handleChangeSettings = () => {
    Cookie.set("settings", JSON.stringify(settings));
  };

  useEffect(() => {
    handleChangeSettings();
  }, [settings]);
  return {
    settings,
    setSettings
  };
};

export default SettingsProvider;