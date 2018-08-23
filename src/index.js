import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "primer/index.scss";

import List from './components/List';
import Create from './components/Create';
import Update from './components/Update';


const Index = () => {
    return (
        <HashRouter>
            <div className={"Box"}>
              <div className={"Box-header"}>
                <center><h1>Mini-blog</h1></center>
              </div>
                <div className={"Box-body content"}>
                    <Route exact path="/" component={List}/>
                    <Route path="/create" component={Create}/>
                    <Route path="/update" component={Update}/>
                </div>
            </div>
        </HashRouter>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
