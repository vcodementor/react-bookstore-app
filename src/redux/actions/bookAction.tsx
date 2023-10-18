import { Book } from "../../types/book";

export const addBook = (book: Book) => ({
    type: 'ADD_BOOK',
    payload: book,
});
  
export const deleteBook = (bookId: number) => ({
    type: 'DELETE_BOOK',
    payload: bookId,
});
  
export const updateBook = (book: Book) => ({
    type: 'UPDATE_BOOK',
    payload: book,
});
  