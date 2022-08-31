import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';


function App() {
  return (

    <Router>
      <Header />
        <Routes>
            <Route 
            path='/'
            exact
            element={<AboutMe />}
            />
            <Route 
            path="/AboutMe"
            element={<AboutMe />}
            />
            <Route 
            path='/React-Portfolio'
            element={<AboutMe />}
            />
        </Routes>
      </Router>
  );
}

export default App;