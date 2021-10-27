import React from "react";

import Layout from "../Layout/Layout";
import { Route, Switch } from "react-router-dom";
import FormPage from "../FormPage/FormPage";
import PreviewPage from "../PreviewPage/PreviewPage";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/form"}>
            <FormPage />
          </Route>
          <Route path={"/preview"}>
            <PreviewPage />
          </Route>
          <Route path={"*"}>Here 404 page</Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
