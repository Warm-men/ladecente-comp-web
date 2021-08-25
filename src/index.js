import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './container/home';
// import Collection from './container/collection';
import CollectionNew from './container/collectionNew';
import About from './container/about';
import AppHome from './containerApp/home';
console.log(window.screen.width);

const windowWidth = window.screen.width;

ReactDOM.render(
  <React.StrictMode>
    {windowWidth > 720 ? (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/collection" component={CollectionNew} />
        <Route path="/about" component={About} />
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    ) : (
      <Router>
        <Route path="/home" component={AppHome} />
        <Route exact path="/">
          <AppHome />
        </Route>
      </Router>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
