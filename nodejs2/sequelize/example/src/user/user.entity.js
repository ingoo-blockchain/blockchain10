module.exports = (sequelize, DataTypes) => {
    sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
                // autoIncrement:true
            },
            pw: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    )
}
