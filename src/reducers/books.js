import { BOOKS_LOADED, BOOKS_START_LOADING } from '../actions';

const booksReducer = (state = {
    isLoaded: false,
    items: []
}, action) => {
    switch (action.type) {
        case BOOKS_START_LOADING:
            return {
                ...state,
                isLoaded: false
            };

        case BOOKS_LOADED:
            return {
                ...state,
                isLoaded: true,
                items: action.books
            };

        default:
            return state;
    }
};

export default booksReducer;