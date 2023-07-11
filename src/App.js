import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import Toggle from 'react-toggle';

import Home from './Home.js';
import Categories from './Categories.js';
import Posts from './Posts.js';
import Tags from './Tags.js';
import Comments from './Comments.js';
import PostComments from './PostComment.js';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'dark' : 'light';
  const toggleIcon = darkMode ? <IoMdSunny /> : <IoMdMoon />;

  return (
    <Router>
      <div className={`app ${themeClass}`}>
        <nav>
          <Link to="/" className="logo">My Blog</Link>
          <Toggle
            className="dark-mode-toggle"
            icons={{
              checked: toggleIcon,
              unchecked: toggleIcon,
            }}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories} />
          <Route path="/posts/:id" component={Posts} />
          <Route path="/posts/:postId/comments" component={PostComments} />
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
