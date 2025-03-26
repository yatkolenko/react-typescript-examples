import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">React Portfolio App</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/todos" className="text-blue-500 hover:underline">
              Todo List
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
