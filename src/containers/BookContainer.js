import { connect } from 'react-redux';

import Book from '../components/Book';

const getBookById = (books, bookId) => {
    // find book object instance by BookId
    return books.find((book) => book.id === bookId);
};

const mapStateToProps = (state, ownProps) => {
    const bookId = Number(ownProps.params.bookId); // url param

    return {
        openedBook: getBookById(state.books.items, bookId),
        isLoaded: state.books.isLoaded
    }
};

export default connect(mapStateToProps)(Book);