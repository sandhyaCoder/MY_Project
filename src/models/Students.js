
// module.exports = (sequelize, DataTypes) => {
//   const Students = sequelize.define('Students', {
//     studentName: DataTypes.STRING,
//     class: DataTypes.STRING,
//     rollNumber: DataTypes.NUMBER,
//     mobilNumber: DataTypes.NUMBER,
//     passWord: DataTypes.STRING,

//   }, {});
  
//   // User.associate = function(models) {
//   //   // associations can be defined here
//   // };
//   return Students;
// };
const {Sequelize, DataTypes} = require("sequelize");

module.exports = (sequelize, DataType) => {
  const students = sequelize.define('Students', {

    id: {
      type: DataType.BIGINT, primaryKey: true, autoIncrement: true
    },

      studentName: {
           type:DataType.STRING,
          allowNull: true
      },
      class: {
        type:DataType.INTEGER,
          allowNull:true
      },
      rollNumber:{
        type:DataType.INTEGER,
          allowNull: true
      },
      mobileNumber:{
        type:DataType.INTEGER,
          allowNull: true
      },
      passWord:{
        type:DataType.INTEGER,
          allowNull: true
      },
      createdAt: {
        allowNull: false,
        type:DataType.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type:DataType.INTEGER,
      }
  }, {
    hooks: {
      beforeCreate: (record, options) => {
        record.dataValues.createdAt = Math.floor(Date.now());
        record.dataValues.updatedAt = Math.floor(Date.now());
      },
      beforeUpdate: (record, options) => {
        record.dataValues.updatedAt = Math.floor(Date.now());
      },
      beforeBulkUpdate: (record, options) => {
        record.attributes.updatedAt = Math.floor(Date.now());
      },
      beforeBulkCreate: (record, options) => {
        record.attributes.createdAt = Math.floor(Date.now());
        record.dataValues.updatedAt = Math.floor(Date.now());
      }
    }
  })
  students.associate = function(models){

  };
  return students;
  
}