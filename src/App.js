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
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>{loggedInUser.email ? loggedInUser.email : ''}</h3>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/inventory">
            <h2>This is inventory </h2>
          </PrivateRoute>
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
    </UserContext.Provider>
  );
}

export default App;
