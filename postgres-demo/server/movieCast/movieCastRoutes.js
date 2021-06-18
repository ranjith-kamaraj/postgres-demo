const Router = require("express-promise-router");

const controller = require("./movieCastController");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route('/create').post(controller.createMovieCast);
    router.route('/list').get(controller.movieCastList);
    router.route('/getMovieCastDetails/:movieCastId').get(controller.getMovieCastDetails);

    return router;
};


