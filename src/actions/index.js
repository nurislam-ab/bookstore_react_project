const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  bookId: book.bookId,
});

const changeFilter = () => ({
  type: CHANGE_FILTER,
});

export { createBook, removeBook, changeFilter };
