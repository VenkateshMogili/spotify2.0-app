import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Albums from './components/Albums';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='home'
        element={<Home />}
      >
        <Route path="dashboard" element={<Dashboard />} />
      <Route path="albums" element={<Albums />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route
        path='home/:id'
        element={<Home />}
      />
      {/* <Route
        path='home/*'
        element={<Home/>}
      /> */}

      <Route
        path='*'
        element={<h1>404 Not Found</h1>}
      />
    </Routes>
  );
}

export default App;
