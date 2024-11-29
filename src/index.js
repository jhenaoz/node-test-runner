const express = require('express');
const app = express();
const { list } = require('./entrypoint/api/user.js');

const port = 3000 || process.env.PORT;

app.get("/users", list );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})