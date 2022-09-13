import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();
// DUONG NGOC HUNG

function App() {
  // New
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <HomeTemplate path="/home" exact Component={Home} />

          <HomeTemplate path="/contact" exact Component={Contact} />
          <HomeTemplate path="/news" exact Component={News} />

          <Route path="/login" exact Component={Login} />
          <Route path="/register" exact Component={Register} />

          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
