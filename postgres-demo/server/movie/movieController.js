const moment = require("moment");
const { isEmpty, get } = require("lodash");
const { Movie } = require('../../model');

const create = async (req, res) => {
    const { movieTitle, movieYear, movieTime, movieLanguage } = req.body;

    const result = await Movie.create({
        movieTitle,
        movieYear,
        movieTime,
        movieLanguage,
        movieId: moment().unix()
    });
    
    const response = result.toJSON();

    if (!isEmpty(response)) {
        return res.send(response);
    } else {
        return res.send({ error: "Movie Creation Failed" });
    }
}

const list = async (req, res) => {

    const result = await Movie.findAll();
    const response = result && result.map(r => r.get({ plain: true }));

    if (!isEmpty(response)) {
        return res.send(response);
    } else {
        return res.send({ error: "List API Failed" });
    }
}

const getMovieDetails = async (req, res) => {
    const details = req.params;
    const movieId = get(details, 'movieId', '');
    const result = await Movie.findOne({ where: {movieId} });

    if (!isEmpty(result)) {
        return res.send(result);
    } else {
        return res.send({ error: "Get Movie API Failed" });
    }
}

const updateMovieDetails = async (req, res) => {
    const { movieId, movieTitle, movieYear, movieTime, movieLanguage } = req.body;
    const result = await Movie.update({
        movieTitle,
        movieYear,
        movieTime,
        movieLanguage
    }, { where: { movieId } });

    if (!isEmpty(result)) {
        return res.send({ message: `Movie Details updated successfully!` });
    } else {
        return res.send({ error: "Get Movie API Failed" });
    }
}

const deleteMovieDetails = async (req, res) => {
    const { movieId } = req.body;
    const result = await Movie.destroy({ where: { movieId } });

    if (result == 1) {
        return res.send({ message: `Successfully movie details deleted from the DB: ${movieId}` });
    }
    else if (result == 0) {
        return res.send({ message: `No records present for: ${movieId}` });
    } else {
        return res.send({ error: "Error Occurs while deleting the movie details" });
    }
}


module.exports = {
    create,
    list,
    getMovieDetails,
    updateMovieDetails,
    deleteMovieDetails
}

// const create = async (req, res) => {
//     const { firstName, lastName } = req.body;

//     const result = await User.create({
//         firstName,
//         lastName,
//         userId: moment().unix()
//     });

//     const response = result.toJSON();

//     if (!isEmpty(response)) {
//         return res.send(response);
//     } else {
//         return res.send({ error: "User Creation Failed" });
//     }
// }

// const list = async (req, res) => {

//     const result = await User.findAll();
//     const response = result && result.map(r => r.get({ plain: true }));

//     if (!isEmpty(response)) {
//         return res.send(response);
//     } else {
//         return res.send({ error: "List API Failed" });
//     }
// }