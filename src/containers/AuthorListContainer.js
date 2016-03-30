import { connect } from 'react-redux';

import AuthorList from '../components/AuthorList';

const mapStateToProps = (state) => {
    return {
        authors: state.authors.items,
        books: state.books.items,
        isLoaded: state.authors.isLoaded && state.books.isLoaded
    }
};

export default connect(mapStateToProps)(AuthorList);