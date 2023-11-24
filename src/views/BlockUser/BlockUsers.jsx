import React from 'react';
import { useUser } from '../../utils/UserContext';


const BlockUsers = () => {
  const { isPremium, blockedUsers, blockUser, unblockUser } = useUser();

  if (!isPremium) return null;

  // Here, you would list users with the option to block/unblock
  // For simplicity, let's assume you have a list of users
  // Example:
  // const users = [{ id: 1, name: 'User 1'}, { id: 2, name: 'User 2'}];

  return (
    <div>
      <h2>Blocked Users</h2>
      {/* Render users with block/unblock option */}
      {blockedUsers.map(user => (
        <div key={user}>
          {user}
          
        </div>
      ))}
     
    </div>
  );
};

export default BlockUsers;