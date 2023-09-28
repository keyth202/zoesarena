import Head from "next/head";
import App from "next/app";
import { CacheProvider } from "@emotion/react";
import cookie from "cookie";
import createEmotionCache from "utils/createEmotionCache";
import OctaviaTheme from "theme";
import SettingsProvider from "contexts/settingsContext";
import { JWTAuthProvider } from "contexts/JWTAuth";
import { initialThemeSettings } from "../constants";
import "nprogress/nprogress.css";
import "react-quill/dist/quill.snow.css";
import "simplebar-react/dist/simplebar.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../__fakeData__"; // Client-side cache, shared for the whole session of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

const MyApp = props => {
  const {
    Component,
    pageProps,
    settings = initialThemeSettings,
    emotionCache = clientSideEmotionCache
  } = props; // Use the layout defined at the page level, if available

  const getLayout = Component.getLayout || (page => page);

  return <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Zoe's Arena</title>
      </Head>

      <SettingsProvider defaultSettings={settings}>
        <JWTAuthProvider>
          <OctaviaTheme>{getLayout(<Component {...pageProps} />)}</OctaviaTheme>
        </JWTAuthProvider>
      </SettingsProvider>
    </CacheProvider>;
};

MyApp.getInitialProps = async context => {
  const appProps = await App.getInitialProps(context);
  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie);
  const settings = cookies["settings"] ? JSON.parse(cookies["settings"]) : undefined;
  return { ...appProps,
    settings
  };
};

export default MyApp;