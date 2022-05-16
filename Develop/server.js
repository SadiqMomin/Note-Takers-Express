const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

require('.routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Api server is listening and ready on port ${PORT}')
})