import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import HomePage from "./pages/HomePage";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import AllMember from "./pages/AllMember";
import Member from "./pages/Member";
import TopTenMember from "./components/TopTenMember";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/member" component={AllMember} />
          <Route exact path="/member/:memberId" component={Member} />
          <Route exact path="/top-ten-member" component={TopTenMember} />
        </Switch>
        <MainFooter />
      </div>
    </Provider>
  );
}

export default App;
