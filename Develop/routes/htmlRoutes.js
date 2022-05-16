const { response } = require('express');
const path = require('path');

module.exports = function (app) {
    app.get('/notes', (req,res) => {
        response.sendFile(path.join(__dirname, '..public/notes.html'));
    });

    app.get('*', (req,res) => {
        response.sendFile*path.join(__dirname, '../public/index.html')
    });
};