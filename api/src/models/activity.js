const {DataTypes}= require("sequelize")
module.exports= (sequelize)=>{
    sequelize.define("activity",{
id:{
    type: DataTypes.UUID,
unique: true,
    primaryKey: true,
    
},
name:{
    type: DataTypes.STRING,
    allowNull: false
},
difficult:{
type: DataTypes.ENUM('1','2','3','4','5'),
allowNull:false
},
duration:{
    type: DataTypes.INTEGER,
    allowNull: false
},
season:{
    type: DataTypes.ENUM('verano','invierno', 'otoño','primavera', 'allseasons'),
    allowNull: false
}
    },{timestamp: false})
}