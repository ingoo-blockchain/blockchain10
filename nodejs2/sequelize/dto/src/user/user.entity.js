module.exports = (sequelize, DataTypes) => {
    sequelize.define('User', {
        id:{
            type:DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true
        },
        pw:{
            type:DataTypes.STRING(30),
            allowNull: false,
        },
        name:{
            type:DataTypes.STRING(30),
            allowNull: false,
        }
    },{
        freezeTableName:true
    })
}