import { connect } from 'react-redux';

import BookList from '../components/BookList';


const getBooksByGenre = (books, genre) => {
    return books.filter((book) => book.genre === genre);
};

const mapStateToProps = (state, ownProps) => {
    const genre = ownProps.location.query.genre; // nor required query param

    // if genre passed filter books by genre
    // else return all books
    const books = genre ?
        getBooksByGenre(state.books.items, genre)
        : state.books.items;

    return {
        books,
        genre,
        isLoaded: state.books.isLoaded
    }
};

export default connect(mapStateToProps)(BookList);