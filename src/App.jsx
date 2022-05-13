import React, { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Posts from "./components/Posts";
import Post from "./components/Post";

const axios = require("axios").default;

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const fetchedPosts = result.data;
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts posts={posts} />
          </Route>
          <Route path="/:id">
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
