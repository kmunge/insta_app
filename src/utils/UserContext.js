import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [followedUsers, setFollowedUsers] = useState([]); // [1, 2, 3, 4, 5]
  const [blockedUsers, setBlockedUsers] = useState([]); // [1, 2, 3, 4, 5]
  const [blockedPosts, setBlockedPosts] = useState([]); // [1, 2, 3, 4, 5

  const login = (userInfo) => {
    setUser(userInfo);
    // Check if user is premium
  console.log(userInfo, "setUser");
  console.log(user, "oldUSer");
  setIsPremium(userInfo.id % 2 === 0);

  };

  const logout = () => {
    setUser(null);
    setIsPremium(false);
    setFollowedUsers([]);
  };

  const followUser = (userId) => {
    setFollowedUsers([...followedUsers, userId]);
  };

  const unfollowUser = (userId) => {
    setFollowedUsers(followedUsers.filter((id) => id !== userId));
  };

  const upgradeToPremium = () => {
    setIsPremium(true);
  };

  const blockUser = (userId) => {
    if (!blockedUsers.includes(userId)) {
      setBlockedUsers([...blockedUsers, userId]);
    };
  }

    const blockPost = (postId) => {
      if (!blockedPosts.includes(postId)) {
        setBlockedPosts([...blockedPosts, postId]);
      }
    };

    const unblockPost = (postId) => {
      setBlockedPosts(blockedPosts.filter((id) => id !== postId));
    };

    const unblockUser = (userId) => {
      setBlockedUsers(blockedUsers.filter((id) => id !== userId));
    };

    return (
      <UserContext.Provider value={{user,login,logout,upgradeToPremium,
        isPremium,
        followUser,
        followedUsers,
        unfollowUser,
        blockUser,
        blockedUsers,
        unblockUser,
        blockPost,
        blockedPosts,
        unblockPost
      }}>
        {children}
      </UserContext.Provider>
    );

};