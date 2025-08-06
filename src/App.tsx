import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CareerAssessment from './components/CareerAssessment';
import PracticeProblem from './components/PracticeProblem';
import Dashboard from './components/Dashboard';
import CareerPath from './components/CareerPath';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assessment" element={<CareerAssessment />} />
            <Route path="/career-path" element={<CareerPath />} />
            <Route path="/practice" element={<PracticeProblem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 