import { Route, Switch } from "react-router-dom";
import Today from "../components/Today"

export function RouteMain() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          1
        </Route>
        <Route path="/about">2</Route>
        <Route path="/home-signed">3</Route>
        <Route path="/today"><Today/></Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
