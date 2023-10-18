import { Book } from "../../types/book";

const initialState: Book[] = [];

const booksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    default:
      return state;
  }
};

export default booksReducer;
