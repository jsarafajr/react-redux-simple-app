import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Book = ({openedBook, isLoaded}) => (
    <div>
        {!isLoaded && <p>Loading...</p>}
        {isLoaded &&
        <div>
            <h3>{openedBook.title}</h3>
            <p>
                <Link to={`/author/${openedBook.author.id}`}>
                    {openedBook.author.name}
                </Link>
            </p>
            <p>
                Genre:
                <Link to={{pathname: '/', query: {genre: openedBook.genre}}}>
                    <i>{openedBook.genre}</i>
                </Link>
            </p>
            <h4>Summary</h4>
            <p>
                {openedBook.summary}
            </p>
        </div>
        }
    </div>
);

Book.propTypes = {
    openedBook: PropTypes.object,
    isLoaded: PropTypes.bool.isRequired
};


export default Book;