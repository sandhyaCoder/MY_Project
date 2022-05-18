
module.exports = (sequelize, DataType) => {
  const parents = sequelize.define('Parents', {

    id: {
      type: DataType.BIGINT, primaryKey: true, autoIncrement: true
    },

      name: {
           type:DataType.STRING,
          allowNull: true
      },
      class: {
        type:DataType.STRING,
          allowNull:true
      },
      rollNumber:{
        type:DataType.BIGINT,
          allowNull: true
      },
      mobileNumber:{
        type:DataType.BIGINT,
          allowNull: false,
          unique: true
      },
      passWord:{
        type:DataType.STRING,
          allowNull: true
      },
      otp:{
        type:DataType.INTEGER,
          allowNull: true
      },
      createdAt: {
        allowNull: false,
        type:DataType.BIGINT,
      },
      updatedAt: {
        allowNull: false,
        type:DataType.BIGINT,
      }
  }, {
    hooks: {
      beforeCreate: (record, options) => {
        record.dataValues.createdAt = Math.floor(Date.now());
        record.dataValues.updatedAt = Math.floor(Date.now());
      },
      beforeUpdate: (record, options) => {
        record.dataValues.updatedAt = Math.floor(Date.now());
      }
    }
  })
  parents.associate = function(models){

  };
  return parents;
  
}