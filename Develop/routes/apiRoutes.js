const path = require('path');
const fs = require('fs')

require('./htmlRoutes');

module.exports = (app) => {
    fs.readFile('db/db.json', 'utf8', function (err,data) {
        if(err) throw err;
        let notes = JSON.parse(data);
        app.get
    })
}