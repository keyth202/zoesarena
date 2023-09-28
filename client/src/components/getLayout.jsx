import DashboardLayoutV1 from "layouts/layout-v1/DashboardLayout";
import DashboardLayoutV2 from "layouts/layout-v2/LayoutV2";
import DashboardLayoutV3 from "layouts/layout-v3/DashboardLayout";
import useSettings from "hooks/useSettings";

const Layout = ({
  children
}) => {
  const {
    settings
  } = useSettings();

  if (settings.activeLayout === "layout1") {
    return <DashboardLayoutV1>{children}</DashboardLayoutV1>;
  }

  if (settings.activeLayout === "layout2") {
    return <DashboardLayoutV2>{children}</DashboardLayoutV2>;
  }

  return <DashboardLayoutV3>{children}</DashboardLayoutV3>;
};

const getLayout = page => <Layout>{page}</Layout>;

export default getLayout;