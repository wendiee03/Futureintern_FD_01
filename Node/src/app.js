const express = require("express");

const app = express();
const PORT = process.env.Port || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})