import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//==========| Components \===================>
import Navbar from "./components/Navbar";
import Header from "./components/Header";

//==========| Containers \===================>

import Splash from "./containers/Splash";
import Create from "./containers/Create";
import Update from "./containers/Update";
import View from "./containers/View";
import NotFound from "./containers/NotFound";

//==========| Styles \===================>
import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <div className="content">
          <Route exact path="/" component={Splash} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/view" component={View} />
          <Route component={NotFound} />
        </div>
      </Router>
    </div>
  );
}

export default App;
