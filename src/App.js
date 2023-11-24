import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './views/Profile/Profile';
import MyPosts from './views/Feed/MyPosts';
import Login from './views/Login/Login';
import UpgradeToPremium from './views/Premium/UpgradeToPremium';
import UsersList from './views/UserList/UserList';
import FollowingPosts from './views/FollowingPost/FollowingPost';
import NavBar from './components/Header/NavBar'; // Assuming you have a NavBar component
import {useUser } from './utils/UserContext';
const App = () => {
  
  const { user } = useUser();

  console.log(user, "user");

  return (
      
      <Router>
        <NavBar />
        <main className="wrapper">
          <Routes>
            <Route path="/" element={user ? <FollowingPosts /> : < Login/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={user ? <Profile /> : <Login />} />
            <Route path="/my-posts" element={user ? <MyPosts /> : <Login />} />
            <Route path="/upgrade" element={user ? <UpgradeToPremium /> : <Login />} />
            <Route path="/users" element={user ? <UsersList /> : <Login />} />
            <Route path="/following-posts" element={user ? <FollowingPosts /> : <Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </Router>
    
  );
};

export default App;
