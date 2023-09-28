import { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";

const RTL = ({
  children
}) => {
  const theme = useTheme();
  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);
  const cacheRtl = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: theme.direction === "rtl" ? [rtlPlugin] : []
  });
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RTL;