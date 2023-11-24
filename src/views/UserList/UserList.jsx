import React, { useState, useEffect } from 'react';
import { useUser } from '../../utils/UserContext';


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const { followedUsers, followUser, unfollowUser, blockedUsers, blockUser, unblockUser } = useUser();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleFollow = (userId) => {
    if (followedUsers.includes(userId)) {
      unfollowUser(userId);
     
    } else {
      followUser(userId);
    
    }
  };

  const handleBlock = (userId) => {
    if (blockedUsers.includes(userId)) {
      unblockUser(userId);
    } else {
      blockUser(userId);
    }
  }

  return (
    <section>
      <article>
        <h1 className="text-2xl text-green-500 text-center font-bold mb-2">Users</h1>
      </article>

      <article>
        {users.map(user => (
          <div key={user.id} className="border border-gray-300 rounded mb-4 p-4">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-700">{user.email}</p>
            <button className="bg-green-500 text-white rounded px-4 py-2 mt-4 mr-4" onClick={() => handleFollow(user.id)}>
              {followedUsers.includes(user.id) ? 'Unfollow' : 'Follow'}
            </button>
            <button className="bg-green-500 text-white rounded px-4 py-2 mt-4" onClick={() => handleBlock(user.id)}>
              {blockedUsers.includes(user.id) ? 'Unblock' : 'Block'}
            </button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default UsersList;