// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './screen/Dashbord/Dashboard';
import DetailsPage from './screen/Detiels/Details';
import Login from './screen/Login/Login';
import Sade from './screen/Data';

function App() {
  return (
    <div dir='rtl' >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<DashboardPage />} />
          <Route path="/details/:id" element={<DetailsPage data={Sade} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
