import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import List from './components/List';
import Create from './components/Create';


const Index = () => {
    return (
        <HashRouter>
            <div>
                <h1>Mini-blog</h1>
                <div className="content">
                    <Route exact path="/" component={List}/>
                    <Route path="/create" component={Create}/>
                </div>
            </div>
        </HashRouter>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
