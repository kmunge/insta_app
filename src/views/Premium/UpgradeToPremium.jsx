import React from 'react';
import { useUser } from '../../utils/UserContext';


const UpgradeToPremium = () => {
  const { isPremium, upgradeToPremium } = useUser();

  if (isPremium) {
    return <div>You are a premium member!</div>;
  }

  return (
    <div>
      <h1>Upgrade to Premium</h1>
      <button
        onClick={upgradeToPremium}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Upgrade Now
      </button>
      <p>Enjoy unlimited access to all posts!</p>
    </div>
  );
};

export default UpgradeToPremium;