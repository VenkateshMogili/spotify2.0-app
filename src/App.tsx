import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Albums from './components/Albums';
import About from './components/About';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import PrivateRouteCommon from './components/PrivateRouteCommon';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      {/* Both authorized and non-authorized */}
      <Route
        path='home'
        element={<Home />}
      >
        <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="albums" element={<PrivateRoute component={Albums} />} />
        <Route path="about" element={<PublicRoute component={About} />} />
      </Route>

      {/* only authorized routes */}
      {/* <Route
        path='home'
        element={<PrivateRouteCommon />}
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="albums" element={<Albums />} />
        <Route path="about" element={<About />} />
      </Route> */}
      <Route
        path="login"
        element={<Login />}
      />
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
