import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  // Add other reducers if needed
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
