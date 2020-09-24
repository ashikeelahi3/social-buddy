import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import UserDetail from './Component/UserDetail/UserDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetail from './Component/PostDetail/PostDetail';
import NotMatch from './Component/NotMatch/NotMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:user">
            <UserDetail/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
