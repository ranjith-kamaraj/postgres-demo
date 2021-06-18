const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User',
        {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: "users",
            underscored: true,
            timestamps: false
        }
    );
    return User;
}

module.exports = userModel;