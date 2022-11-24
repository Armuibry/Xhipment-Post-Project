import React, { useState } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

import { Routes, Route } from 'react-router-dom'

import AppContext from './context/context'

function App() {

  const [posts, setPosts] = useState([]);
  return (
    <AppContext.Provider value={{
      setPosts: setPosts,
      posts: posts
    }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element=<Home /> />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
