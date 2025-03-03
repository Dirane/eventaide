import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import Dashboard from './Components/Dashboard/Dashboard'; // Import Dashboard component
import EventForm from './Components/EventForm/EventForm';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add dashboard route */}
          <Route path="/create-event" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;