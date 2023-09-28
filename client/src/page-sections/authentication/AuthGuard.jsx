import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import Login from "pages/authentication/login-v2";
import { Fragment, useState } from "react"; // component props interface

const AuthGuard = ({
  children
}) => {
  const {
    isAuthenticated
  } = useAuth();
  const {
    pathname,
    replace
  } = useRouter();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return replace(requestedLocation);
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;