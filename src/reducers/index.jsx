import { combineReducers } from 'redux';
import PostReducer from './reducerPost.jsx';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
