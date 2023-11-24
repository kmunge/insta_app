const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
  // Function to fetch posts
  fetchPosts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // Function to fetch posts by user
  fetchPostsByUser: async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching posts for user:', error);
      throw error;
    }
  },

  // Additional functions for other endpoints can be added here
};

export default api;