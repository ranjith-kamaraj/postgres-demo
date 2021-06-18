const movieModel = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie',
        {
            movieId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            movieTitle: {
                type: DataTypes.STRING,
                allowNull: false
            },
            movieYear: {
                type: DataTypes.STRING
            },
            movieTime: {
                type: DataTypes.STRING
            },
            movieLanguage: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: "movie",
            underscored: true,
            timestamps: false
        }
    );
    
    return Movie;
}

module.exports = movieModel;