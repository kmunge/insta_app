import React, { useState, useEffect } from 'react';
import { useUser } from '../../utils/UserContext';
import api from '../../services/api';

const FollowingPosts = () => {
  const { followedUsers, blockedUsers, blockedPosts, unblockPost, blockPost } = useUser();
  const [posts, setPosts] = useState([]);

  const handleBlockPost = (postId) => {
    if(blockedPosts.includes(postId)){
      unblockPost(postId);
    } else {
      blockPost(postId);
    }
  };

  useEffect(() => {
    const fetchFollowedUsersPosts = async () => {
      
      const postsPromises = followedUsers.map(userId => api.fetchPostsByUser(userId));
      const postsArrays = await Promise.all(postsPromises);
      setPosts(postsArrays.flat());

     
      //filter out posts from blocked users or blocked posts
      const filteredPosts = postsArrays.flat().filter(post => !blockedUsers.includes(post.userId) && !blockedPosts.includes(post.id));

     
     setPosts(filteredPosts);
      
    };

    if (followedUsers.length > 0) {
      fetchFollowedUsersPosts();
    }
  }, [followedUsers, blockedUsers, blockedPosts]);


 
  return (
    <>
    <section>
      <article>
        <h1 className="text-2xl text-green-500 text-center font-bold mb-2">Following Posts</h1>

      </article>


      
      <article>
        {posts.length === 0 ? (
            <p className="text-gray-700 text-center">No posts available. Click on the Users tab and follow new users.</p>
          ) : (posts.map(post => (
          <div key={post.id} className="border border-gray-300 rounded mb-4 p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <button className="bg-green-500 text-white rounded px-4 py-2 mt-4" onClick={() => handleBlockPost(post.id)}>
              {blockedPosts.includes(post.id) ? 'Unblock' : 'Block'}
            </button>
          </div>
        )))}
        </article>
    </section>
    </>
  );
};

export default FollowingPosts;