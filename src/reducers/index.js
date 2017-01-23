import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks.jsx';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
