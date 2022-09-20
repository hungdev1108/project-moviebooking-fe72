import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout/Checkout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
// import { Suspense, lazy } from "react";

export const history = createBrowserHistory();
// DUONG NGOC HUNG

function App() {
  // New
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/detail/:id" exact Component={Detail} />

          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

          <UserTemplate path="/login" exact Component={Login} />
          <Route path="/register" exact component={Register} />

          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
