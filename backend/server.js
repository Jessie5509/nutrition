const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    mapFunctions(arr);
    console.log(`Example app listening on port ${port}`)
})
