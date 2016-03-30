import superagent from 'superagent';

export const BOOKS_START_LOADING = 'BOOKS_START_LOADING';
export const BOOKS_LOADED = 'BOOKS_LOADED';

export function fetchBooks() {
    return dispatch => {
        dispatch({
            type: BOOKS_START_LOADING
        });

        superagent
            .get('/api/book')
            .end((err, res) => {
                if (err) console.error(err);
                else dispatch({
                    type: BOOKS_LOADED,
                    books: res.body
                });
            })
    };
}

export const AUTHORS_START_LOADING = 'AUTHORS_START_LOADING';
export const AUTHORS_LOADED = 'AUTHORS_LOADED';

export function fetchAuthors() {
    return dispatch => {
        dispatch({
            type: AUTHORS_START_LOADING
        });

        superagent
            .get('/api/author')
            .end((err, res) => {
                if (err) console.error(err);
                else dispatch({
                    type: AUTHORS_LOADED,
                    authors: res.body
                });
            })
    }
}