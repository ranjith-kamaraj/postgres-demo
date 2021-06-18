const express = require('express');

const movieRoutes = require("./movie/movieRoutes");
const movieCastRoutes = require("./movieCast/movieCastRoutes");

const apiRouter = express.Router();

module.exports = () =>
    apiRouter
        .use("/movie", movieRoutes())
        .use("/movieCast", movieCastRoutes());
