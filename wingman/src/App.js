import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Matches from './pages/Matches';
import AutoMatch from './pages/AutoMatch';
import Following from './pages/Following';
import Followers from './pages/Followers';
import Friends from './pages/Friends';
import Search from './pages/Search';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auto-match" element={<AutoMatch />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/friends" element={<Friends />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;