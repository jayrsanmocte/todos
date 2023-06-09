import React, { useEffect, useState } from 'react';

const SingleList = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchRandomContent();
  }, []);

  const fetchRandomContent = () => {
    setContent(null); // Clear the existing content
    const randomId = Math.floor(Math.random() * 150) + 1; // Generate random ID
    fetch(`https://dummyjson.com/posts/${randomId}`)
      .then(res => res.json())
      .then(data => setContent(data));
  };

  const handleFetchContent = () => {
    fetchRandomContent();
  };

  return (
    <div>
      <h2>TODO single</h2>
      {content ? (
        <div>
          <h3>{content.title}</h3>
          <p>{content.body}</p>
        </div>
      ) : (
        <p>Loading content...</p>
      )}
      <button onClick={handleFetchContent}>Fetch Random Content</button>
    </div>
  );
};

export default SingleList;