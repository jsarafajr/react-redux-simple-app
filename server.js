'use strict';
const path = require('path');
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

//app.use('/build', express.static('build'));

const booksJSON = require('./data/books.json');
const authorsJSON = require('./data/authors.json');


// create map from authors list
// key - authorId, value - author
const authorsMap = authorsJSON.reduce((map, author) => {
    return Object.assign({}, map, {[author.id]: author});
}, {});

const books = booksJSON.map((book) => {
    let author = authorsMap[book.authorId];
    return Object.assign({}, book, {
        author: {
            id: author.id,
            name: author.name
        }
    });
});

const data = {books, authors: authorsJSON};

app.get('/api/book', (req, res) => {
    res.json(data.books);
});

app.get('/api/author', (req, res) => {
    res.json(data.authors);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen(3000, '0.0.0.0');