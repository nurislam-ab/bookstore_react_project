const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const bookIds = () => Math.ceil(Math.random() * 100);

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          bookId: bookIds(),
          title: action.book.title,
          category: action.book.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;
