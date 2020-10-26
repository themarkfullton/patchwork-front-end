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
          <Route path="/update/:id" component={Update} />
          <Route exact path="/view" component={View} />
        </div>
      </Router>
    </div>
  );
}

export default App;
