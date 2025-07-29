import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const isAuthenticated = localStorage.getItem('token'); // or your auth logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
