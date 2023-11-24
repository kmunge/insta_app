import React from 'react';
import { useUser } from '../../utils/UserContext'; // Import the user context
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { user, isPremium, upgradeToPremium } = useUser();

  const handleUpgrade = () => {
    upgradeToPremium();
    // Additional logic if needed
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link to="/" className="text-blue-500 hover:text-blue-800">Home</Link>
        </li>

        <li className="mr-6">
          <Link to="/users" className="text-blue-500 hover:text-blue-800">Users</Link>
        </li>

        {user && (
          <li className="mr-6">
            <Link to="/my-posts" className="text-blue-500 hover:text-blue-800">My Posts</Link>
          </li>
        )}

        {user && (
          <li className="mr-6">
            <Link to="/profile" className="text-blue-500 hover:text-blue-800">Profile</Link>
          </li>
        )}

        {!isPremium && (
          <li>
            <button onClick={handleUpgrade} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upgrade to Premium
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;