import React, { Component } from 'react';

// declare your vars at module level
const API_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'd3';

// class-based component
class HackerNews extends Component {
  // local component state
  state = {
    hits: [],
  };

  // lifecycle events
  componentDidMount() {
    // fetch data and save in local state
    fetch(API_BASE_URL + DEFAULT_QUERY)
      .then((res) => res.json())
      .then((data) => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state; // destructuring

    return (
      <ul className="left">
        {hits.map((hit) => (
          <li key={hit.objectID}>
            <a href={hit.url} target="_blank">
              {hit.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default HackerNews;
