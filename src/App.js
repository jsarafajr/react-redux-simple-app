import './style.less';
import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

/* Redux Containers */
import NavBar from './components/NavBar';
import BookListContainer from './containers/BookListContainer';
import AuthorListContainer from './containers/AuthorListContainer';
import BookContainer from './containers/BookContainer';
import AuthorContainer from './containers/AuthorContainer';

import reducers from './reducers';
import { fetchBooks, fetchAuthors } from './actions';

/* configuring store */
const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), applyMiddleware(thunk));

/* create redux history instance */
const history = syncHistoryWithStore(browserHistory, store);

/* load initial data from server */
store.dispatch(fetchBooks());
store.dispatch(fetchAuthors());

const App = () => (
    <Provider store={store}>
        <div className="container">
            <NavBar />
            <Router history={history}>
                <Route path="/" component={BookListContainer}/>
                <Route path="authorList" component={AuthorListContainer}/>
                <Route path="book/:bookId" component={BookContainer}/>
                <Route path="author/:authorId" component={AuthorContainer}/>
            </Router>
        </div>
    </Provider>
);

export default App;