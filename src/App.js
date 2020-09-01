import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Review from "./components/Review/Review";


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <h2>This is inventory </h2>
          </Route>
          <Route exact path="/">
            <h2>Welcome home</h2>
          </Route>
          <Route path={'/product/:productKey'}>
              <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <h3>404 not found</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
