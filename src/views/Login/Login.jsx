import React, { useState } from 'react';
import { useUser } from '../../utils/UserContext';
import login_insta from '../login_insta.svg';


const Login = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    console.log('username', username);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      const user = users.find(u => u.username === username && u.address.zipcode === zipcode);

      console.log('user', user);

      if (user) {
        login(user);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Failed to fetch user data. Please try again later.');
    }
  };

  return (
    <>
    <section className="p-5 lg:grid grid-cols-2
    mt-10  rounded shadow lg:p-0">
      <article className="get__started py-10 rounded-t 
      lg:rounded-l lg:p-10">
        <img 
        src={login_insta} 
        alt="Instagram logo" 
        title="hero"
        className="w-9-12 mx-auto lg:w-full"/>
      </article>

      <article className=" bg-white p-5 rounded-b 
      lg:rounded-r lg:px-10">
        <form  autoComplete="off" className="flex 
        justify-center flex-col lg:mt-40 "  
        onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-gray-900 mb-1">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={username}
            autoComplete="off"
            required
            className="mb-5 py-2 
            text-green-500 tracking-wide
            placeholder-green-500 border-b-2 border-gray-500" 
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="zipcode" className="text-gray-900 mb-1">Zipcode</label>
          <input
            type="password"
            name="password"
            id="zipcode"
            placeholder="Enter zipcode"
            value={zipcode}
            autoComplete="off"
            required
            className="mb-5 py-2 
            text-green-500 tracking-wide
            placeholder-green-500 border-b-2 border-gray-900"
            onChange={(event) => setZipcode(event.target.value)}
          />
          <div className="cta">
            <button className="bg-green-500 py-2 px-6 rounded shadow 
            transition-all duration-300 hover:bg-transparent 
            hover:text-green-500 border border-green-500" type="submit">Login</button>
          </div>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </article>
    </section>
    </>
  );
};

export default Login;


