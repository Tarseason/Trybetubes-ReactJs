import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/album/:id">Album</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/profile/edit">ProfileEdit</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            component={ Login }
          />
          <Route
            path="/search"
            component={ Search }
          />
          <Route
            path="/album/:id"
            component={ Album }
          />
          <Route
            path="/favorites"
            component={ Favorites }
          />
          <Route
            path="/profile"
            exact
            component={ Profile }
          />
          <Route
            path="/profile/edit"
            component={ ProfileEdit }
          />
          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
