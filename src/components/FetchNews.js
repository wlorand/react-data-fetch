import React, { useState, useEffect } from 'react';

// data fetch
import axios from 'axios';

// API QUERY CONSTANT -- TODO: bust out the query into a param to customize
const HACKER_NEWS_D3 = 'https://hn.algolia.com/api/v1/search?query=d3';

function FetchNews() {
  // initial state
  const initialState = {
    hits: [],
  };

  const [data, setData] = useState(initialState);

  // 1- fetch data with axios and useEffect
  useEffect(() => {
    const fetchData = async (query) => {
      const result = await axios(query);
      setData(result.data);
    };
    fetchData(HACKER_NEWS_D3);
  }, []); // just for initial render

  return (
    <ul className="news-list">
      {data.hits.map((item, i) => (
        <li key={`${i}-${item.ObjectID}`} className="news-item">
          {item.title}
        </li>
      ))}
      {console.log(data)}
    </ul>
  );
}

export default FetchNews;
