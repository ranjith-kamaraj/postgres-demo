const Router = require("express-promise-router");

const controller = require("./movieController");

module.exports = () => {
    const router = Router({ mergeParams: true });

    router.route('/create').post(controller.create);
    router.route('/list').get(controller.list);
    router.route('/getMovieDetails/:movieId').get(controller.getMovieDetails);
    router.route('/updateMovieDetails').put(controller.updateMovieDetails);
    router.route('/deleteMovieDetails').delete(controller.deleteMovieDetails);

    return router;
};


