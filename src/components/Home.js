import React from "react";
import Header from "./header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./register/Register";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path="/register" component={Register} />
          <Route path="/login" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Home;
