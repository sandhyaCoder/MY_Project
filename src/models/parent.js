module.exports = (sequelize, DataTypes) => {
    const Parents = sequelize.define('Parents', {
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      rollNumber: DataTypes.NUMBER,
      mobilNumber: DataTypes.NUMBER,
      passWord: DataTypes.STRING,
  
    }, {});
    
    // User.associate = function(models) {
    //   // associations can be defined here
    // };
    return Parents;
  };