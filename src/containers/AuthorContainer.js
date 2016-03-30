import { connect } from 'react-redux';

import Author from '../components/Author';

const getAuthorById = (authors, authorId) => {
    // get author object instance by AuthorId
    return authors.find((author) => author.id === authorId);
};

const getAuthorsBooks = (books, authorId) => {
    // filter books by authorId
    return books.filter((book) => book.author.id === authorId);
};

const mapStateToProps = (state, ownProps) => {
    const authorId = Number(ownProps.params.authorId); // url param

    return {
        openedAuthor: getAuthorById(state.authors.items, authorId),
        authorsBooks: getAuthorsBooks(state.books.items, authorId),
        // isLoaded == true only when both authors and books are loaded
        isLoaded: state.authors.isLoaded && state.books.isLoaded
    };
};

export default connect(mapStateToProps)(Author);