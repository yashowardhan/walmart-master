import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/Signin";
import MediaCard from "./components/card/Card";
import Header from "./components/common/Header";
import ProductEditForm from "./components/card/CardEditForm";
import CardDetail from "./components/card/CardDetail";
import Search from "./components/common/Search";
import Filter from "./components/common/Filter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/editproduct/:id" component={ProductEditForm} />
          <Route path="/productdetail" component={CardDetail} />
          <Route path="/searchproduct" component={Search} />
          <Route path="/filter" component={Filter} />
        </Switch>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
