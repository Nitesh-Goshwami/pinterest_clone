import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeNavbar from "../components/Home/HomeNavbar";

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomeNavbar/>
          <Home/>
        </Route>
        <Route path="/about">2</Route>
        <Route path="/home-signed">3</Route>
        <Route path="/today">4</Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
