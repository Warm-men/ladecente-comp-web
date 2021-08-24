import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './container/home';
// import Collection from './container/collection';
import CollectionNew from './container/collectionNew';
import About from './container/about';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/collection" component={CollectionNew} />
      <Route path="/about" component={About} />
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
