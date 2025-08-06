import * as React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Career Assessment</h2>
        <p className="text-gray-600 mb-4">
          Take our AI-powered assessment to discover your ideal career path.
        </p>
        <Link
          to="/assessment"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Start Assessment
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Practice Problems</h2>
        <p className="text-gray-600 mb-4">
          Sharpen your skills with our curated collection of practice problems.
        </p>
        <Link
          to="/practice"
          className="inline-block bg-green-500 text-white px-4 py-2 rounded"
        >
          Start Practice
        </Link>
      </div>
    </div>
  );
};

export default Dashboard; 