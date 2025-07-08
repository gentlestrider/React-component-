import { useState, useEffect } from 'react';
import ListComponent from './ListComponent';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Custom render function for list items
  const renderPostItem = (post) => (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );

  if (loading) {
    return <div className="loading">Loading data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <ListComponent 
        items={posts} 
        renderItem={renderPostItem} 
        emptyMessage="No posts available"
      />
    </div>
  );
}

export default App;
