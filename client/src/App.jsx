import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { AuthRoute } from "./feature/Common/AuthRoute";
import { Layout } from "./feature/Common/Layout";
import { Provider } from "react-redux";
import { store } from "./store";

import { getAuthUserData } from "./helpers/auth";
import { signinSuccess, logout } from "./feature/Auth/Signin/actions";

import { initAuthInterceptor } from "./helpers/api";

const userAuth = getAuthUserData();
if (userAuth) {
  store.dispatch(signinSuccess(userAuth));
}

initAuthInterceptor(store, logout);

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
      <BrowserRouter >
          <Routes>
            {routes.map((item, i) =>{
              const El = item.component
              return(
                item.isAuth ? (
                  <Route
                    path={item.path}
                    element={
                      <AuthRoute>
                        <El/>
                      </AuthRoute>
                    }
                    key={i}
                  />
                ) : (
                  <Route
                    path={item.path}
                    element={<El/>}
                    key={i}
                  />
                )
              )}
                )}
          </Routes>
      </BrowserRouter>
      </Layout>
    </Provider>
  );
};

export default App;
