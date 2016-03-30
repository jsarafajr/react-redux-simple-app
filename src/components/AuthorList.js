import React, { PropTypes } from 'react';
import { Link } from 'react-router';


class AuthorList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleDropdown: null // index currently opened dropdown
        };

        this.showDropdown = this.showDropdown.bind(this);
        this.hideDropdown = this.hideDropdown.bind(this);
    }

    showDropdown(event, index) {
        event.preventDefault(); // prevent a action
        this.setState({visibleDropdown: index});
        document.addEventListener('click', this.hideDropdown);
    }

    hideDropdown() {
        this.setState({visibleDropdown: null});
        document.removeEventListener('click', this.hideDropdown);
    }

    render() {
        const { books, authors, isLoaded } = this.props;
        const { visibleDropdown } = this.state;

        // return books matches opened author
        const getAuthorsBooks = (author) => {
            return books.filter((book) => book.author.id === author.id);
        };

        return (
            <div>
                <h3>Authors</h3>
                {!isLoaded && <p>Loading...</p>}
                {isLoaded &&
                <div className="list-group">
                    {
                        authors.map((author, i) => (
                            <div key={i} className="list-group-item">
                                <a href="#" onClick={(e) => this.showDropdown(e, i)}>
                                    {author.name}
                                </a>

                                {visibleDropdown === i &&
                                <ul className="list-dropdown">
                                    <li className="dropdown-header">
                                        <Link to={`author/${author.id}`}>
                                            Profile Page
                                        </Link>
                                    </li>
                                    <li className="divider"></li>
                                    {
                                        getAuthorsBooks(author).map((book, i) => (
                                            <li key={i} className="dropdown-header">
                                                <Link to={`/book/${book.id}`}>
                                                    {book.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                }
                            </div>
                        ))
                    }
                </div>
                }
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: PropTypes.array,
    books: PropTypes.array,
    isLoaded: PropTypes.bool.isRequired
};

export default AuthorList;