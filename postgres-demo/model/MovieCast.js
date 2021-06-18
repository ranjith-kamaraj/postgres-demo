const movieCastModel = (sequelize, DataTypes) => {
    const MovieCast = sequelize.define('MovieCast',
        {
            // actorId: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            movieCastId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            movieId: {
                type: DataTypes.STRING,
                allowNull: false
            },
            role: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: "movie_cast",
            underscored: true,
            timestamps: false
        }
    );

    MovieCast.associate = function (models) {
        MovieCast.belongsTo(models.Movie, {
            foreignKey: "movieId",
            onDelete: "cascade",
            hooks: true,
        });
    };

    return MovieCast;
};

module.exports = movieCastModel;