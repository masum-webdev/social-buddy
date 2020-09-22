import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import PostDetails from './PostDetails/PostDetails';

export const PostContext = createContext();


function App() {
  const [postdata, setPostData] = useState({});
  return (
    <PostContext.Provider value={[postdata, setPostData]} >
      <Header />
      <Router >
        <div className="container">
          <Switch>
            <Route path="/home" children={<Home />} />
            <Route path="/post/:id" children={<PostDetails />} />
            <Route exact path="/" children={<Home />} />
            <Route exact path="/*" children={<NotFound />} />
          </Switch>
        </div>
      </Router>
    </PostContext.Provider>

  );
}

export default App;
