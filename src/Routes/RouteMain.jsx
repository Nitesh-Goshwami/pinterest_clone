import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

import { Hmain } from "../components/Home_Signed/Hmain";
import Today from "../components/Today";

// import { Navbar } from "../Components/Navbar";

import Home from "../components/Home/Home";
import HomeNavbar from "../components/Home/HomeNavbar";
import About from "../About/About";

export function RouteMain() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {!isAuth ? (
            <>
              <HomeNavbar />
              <Home />
            </>
          ) : (
            <Hmain />
          )}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home-signed">
          <Hmain />
        </Route>
        <Route path="/today">
          <Today />
        </Route>
        <Route>
          <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
