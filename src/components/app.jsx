import React from 'react';
import { Component } from 'react';
import BookList from '../containers/bookList.jsx';
import BookDetail from '../containers/bookDetail.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
