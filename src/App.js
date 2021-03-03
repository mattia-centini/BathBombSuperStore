import React from "react";
import { Home, ProductPage } from "./pages/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Cart, NavMenu, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
