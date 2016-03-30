import { AUTHORS_LOADED, AUTHORS_START_LOADING } from '../actions';

const authorsReducer = (state = {
    isLoaded: false,
    items: []
}, action) => {
    switch (action.type) {
        case AUTHORS_START_LOADING:
            return {
                ...state,
                isLoaded: false
            };

        case AUTHORS_LOADED:
            return {
                ...state,
                items: action.authors,
                isLoaded: true
            };

        default:
            return state;
    }
};

export default authorsReducer;