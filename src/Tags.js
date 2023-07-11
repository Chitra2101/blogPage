import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Categories from './Categories';
import Posts from './Posts';
import Tags from './Tags';
import Comments from './Comments';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/" className="logo">My Blog</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/posts" component={Posts} />
          <Route path="/tags" component={Tags} />
          <Route path="/comments" component={Comments} />
        </Switch>
        <footer>
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
