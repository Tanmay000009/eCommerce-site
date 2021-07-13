const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./assets'));

// View Engine
app.set('view engine','ejs');
app.set('views','./views');


// use express router
app.use('/', require('./routes'));


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in starting server!");
    } else {
        console.log(`Server started on port: ${PORT}`);
    }
})