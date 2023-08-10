import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoute from "./routes/PublicRoute";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                element={<Layout>{route.component}</Layout>}
                path={route.path}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
