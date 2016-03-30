import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BookList = ({books, genre, isLoaded}) => {
    return (
        <div>
            {!isLoaded && <p>Loading...</p>}
            {isLoaded &&
            <div>
                <h3>{genre || 'Books'}</h3>
                <div className="list-group">
                    {
                        books.map((book, i) => (
                            <div key={i} className="list-group-item">
                                <Link to={`/book/${book.id}`}>
                                    <h4 className="list-group-item-heading">{book.title}</h4>
                                </Link>
                                <Link to={`/author/${book.author.id}`}>
                                    <p className="list-group-item-text">{book.author.name}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            }
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    genre: PropTypes.string,
    isLoaded: PropTypes.bool.isRequired
};

export default BookList;