const moment = require("moment");
const {get, isEmpty } = require("lodash");
const { Movie, MovieCast } = require('../../model');

const createMovieCast = async (req, res) => {
    const { movieId, role } = req.body;

    if(!movieId && !role){
        return res.send({ error: "Either movieId or role is missing!" });
    }
    const result = await MovieCast.create({
        movieId,
        role,
        movieCastId: moment().unix()
    });
    
    const response = result.toJSON();
    if (!isEmpty(response)) {
        return res.send(response);
    } else {
        return res.send({ error: "Movie Creation Failed" });
    }
}

const movieCastList = async (req, res) => {

    const result = await MovieCast.findAll({
        include: [{
            model: Movie,
            as: 'Movie'
        }]
    });
    const response = result && result.map(r => r.get({ plain: true }));

    if (!isEmpty(response)) {
        return res.send(response);
    } else {
        return res.send({ error: "List API Failed" });
    }
}

const getMovieCastDetails = async (req, res) => {
    const details = req.params;
    const movieCastId = get(details, 'movieCastId', '');

    const result = await MovieCast.findByPk( movieCastId, {
        include: [{
            model: Movie,
            as: 'Movie'
        }]
    });

    if (!isEmpty(result)) {
        return res.send(result);
    } else {
        return res.send({ error: "Get Movie API Failed" });
    }
}

module.exports = {
    createMovieCast,
    movieCastList,
    getMovieCastDetails
}