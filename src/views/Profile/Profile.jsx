import React from 'react';
import { useUser } from '../../utils/UserContext';



const Profile = () => {
  const { user } = useUser();

  const { logout } = useUser();

const handleLogout = () => {
    logout();       
}

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <>
      <section className="p-5 lg:grid grid-cols-2
    mt-10  rounded shadow lg:p-0">
        
        <article className="flex justify-center">
        <h1 className="text-2xl text-green-500 text-center font-bold mb-2">Profile details</h1>
          <ul>
            <li><strong>Name:</strong> {user.name}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>City:</strong> {user.address.city}</li>
          </ul>
          {/* Add more user details as needed */}
        </article>
        <article className="flex justify-center">
          <button onClick={handleLogout} className="bg-green-500 py-2 px-6 rounded shadow 
            transition-all duration-300 hover:bg-transparent 
            hover:text-green-500 border border-green-500 sm:w-auto">Logout</button>
        </article>
      </section>
    </>
  );
};

export default Profile;
