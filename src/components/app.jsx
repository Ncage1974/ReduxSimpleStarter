import React from 'react';
import { Component } from 'react';
import BookList from '../containers/bookList.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
