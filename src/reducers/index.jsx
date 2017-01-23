import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks.jsx';
import ActiveBookReducer from './reducerActiveBook.jsx';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
