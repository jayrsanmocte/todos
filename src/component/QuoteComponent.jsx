import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div>
      <h2>Random Quote:</h2>
      <p>Quote: {quote.quote}</p>
      <p>Author: {quote.author}</p>
      <button onClick={handleNewQuote}>Get New Quote</button>
    </div>
  );
};

export default QuoteComponent;
