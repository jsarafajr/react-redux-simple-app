import React, { PropTypes } from 'react';
import { Link } from 'react-router'

const Author = ({openedAuthor, authorsBooks, isLoaded}) => (
    <div>
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && <div>
            <h3>{openedAuthor.name}</h3>
            <p>{openedAuthor.information}</p>
            <div>
                <h4>Authors books:</h4>
                <ul>
                    {
                        authorsBooks.map((book, i) =>
                            <li key={i}>
                                <Link to={`/book/${book.id}`}>{book.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
        }
    </div>
);

Author.propTypes = {
    openedAuthor: PropTypes.object,
    authorsBooks: PropTypes.array,
    isLoaded: PropTypes.bool.isRequired
};

export default Author;