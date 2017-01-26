import React from 'react';
import { Component } from 'react';
import WeatherList from '../containers/weatherList.jsx';

import SearchBar from '../containers/searchBar.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
