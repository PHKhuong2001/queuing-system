import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoute from "./routes/PublicRoute";
import privateRoute from "./routes/PrivateRoute";

import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useEffect, useState } from "react";
import { IAccount } from "./Shared/interfaces/AccountInterface";
import LayoutLogin from "./layouts/LayoutLogin";
import routesConfig from "./config/routes";
import ResetPassword from "./view/Auth/ResetPassword";

function App() {
  const success = useSelector((state: RootState) => state.auth.success);
  const [tokens, setTokens] = useState<IAccount | undefined>(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      const user: IAccount = JSON.parse(storedUser || "");
      return user;
    } else {
      return undefined;
    }
  });
  useEffect(() => {
    if (success) {
      const storedUser = localStorage.getItem("token");
      if (storedUser) {
        const user: IAccount = JSON.parse(storedUser || "");
        setTokens(user);
      }
    }
  }, [success]);
  return (
    <>
      <Router>
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = route.layout;
            return (
              <Route
                key={index}
                element={<Layout>{route.component}</Layout>}
                path={route.path}
              />
            );
          })}

          {tokens &&
            privateRoute.map((route, index) => {
              const PrivateLayout = route.layout;
              return (
                <Route
                  key={index}
                  element={<PrivateLayout>{route.component}</PrivateLayout>}
                  path={route.path}
                />
              );
            })}

          <Route
            element={
              <LayoutLogin>
                <ResetPassword />
              </LayoutLogin>
            }
            path={routesConfig.changePassword}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
