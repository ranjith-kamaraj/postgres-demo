const express = require("express");

const apiRoutes = require('./server/routes');

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api", apiRoutes());

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
});