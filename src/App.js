import React, { createContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import ProductDetails from "./Component/Products/ProductDetails/ProductDetails";

import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products";

export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={ProductDetails} />
          
        </Switch>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default App;
