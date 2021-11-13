import { Route, Switch } from "react-router-dom";

import { Hmain } from "../Components/Home_Signed/Hmain";
import Today from "../components/Today"

// import { Navbar } from "../Components/Navbar";

import Home from "../components/Home/Home";
import HomeNavbar from "../components/Home/HomeNavbar";

export function RouteMain() {
  return (
    <div >
      <Route><Navbar/></Route>
      <Switch>
        <Route path="/" exact>
//           Its Home Page
          <HomeNavbar/>
          <Home/>
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
