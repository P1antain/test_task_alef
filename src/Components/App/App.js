import React from "react";

import Layout from "../Layout/Layout";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import FormPage from "../FormPage/FormPage";
import PreviewPage from "../PreviewPage/PreviewPage";


function App() {
  const history = useHistory()
  const location = useLocation()
  React.useEffect(()=>{
    console.log(location.pathname)
    if(location.pathname = 'test_task_alef'){
      history.push('/form')
    }
  },[])
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
