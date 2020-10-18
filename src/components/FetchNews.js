import React, { useState } from 'react';

function FetchNews() {
  // implement useState hook to setData

  const nums = [2, 4, 6, 8, 9, 6, 3];

  const [numData, setNumData] = useState(nums);

  return (
    <ul className="news-list">
      {numData.map((num, i) => (
        <li key={i}>{`i am ${num}`}</li>
      ))}
    </ul>
  );
}
export default FetchNews;
