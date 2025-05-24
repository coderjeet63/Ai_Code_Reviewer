console.log("server.js loaded");

require('dotenv').config(); // ✅ with () to load env variables
const app = require('./src/app');

const port = 4500;

app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});
