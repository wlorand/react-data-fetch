import React, { Component } from 'react';

// declare your vars at module level
const API_BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'd3';

// make a class-based component
class HackerNews extends Component {
  // constructor(props) {
  //   super(props);

  //   // define local state
  //   this.state = {
  //     hits: [], // store initial state as empty array to be filled with data
  //   };
  // }

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
    const { hits } = this.state; // destructuring to get a var from state inside your render

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
