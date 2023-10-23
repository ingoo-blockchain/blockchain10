module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model {}
    User.init(
        {
            id: { type: DataTypes.STRING(30), allowNull: false, primaryKey: true },
            pw: { type: DataTypes.STRING(30), allowNull: false },
            name: { type: DataTypes.STRING(30), allowNull: false },
        },
        { sequelize, freezeTableName: true },
    )

    return User
}
