import React, { useState, useEffect } from 'react';
import { useUser } from '../../utils/UserContext';
import api from '../../services/api';

const MyPosts = () => {
  const { user, isPremium } = useUser();
  const [posts, setPosts] = useState([]);
  const [viewedCount, setViewedCount] = useState(0); // Add state to track viewed posts

  useEffect(() => {
    if (user) {
      const fetchPosts = async () => {
        try {
          const userPosts = await api.fetchPostsByUser(user.id);
          setPosts(userPosts.slice(0, isPremium ? userPosts.length : 20));
        } catch (error) {
          console.log('Error fetching posts:', error);
        }
      };
      fetchPosts();
    }
  }, [user, isPremium]);

  if (!user) return <div>Please log in to view your posts.</div>;

  const handlePostView = () => {
    if (!isPremium) {
      setViewedCount(viewedCount + 1);
      if (viewedCount >= 20) {
        // Prompt user to upgrade
        alert("You have reached the limit of free posts. Please upgrade to premium for unlimited access.");
      }
    }
  };

  return (
    <>
      <section>
        <article>
          <h1 className="text-2xl text-green-500 text-center font-bold mb-2">My Posts</h1>
        </article>
        <article>
          {posts.map(post => (
            <div key={post.id} className="border border-gray-300 rounded mb-4 p-4" onClick={handlePostView}>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};

export default MyPosts;