'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  	id: {
  		alllowNull: false,
  		primaryKey: true,
  		type: DataTypes.UUID,
  		defaultValue: DataTypes.UUIDV4
  	},
    email: {
    	type: DataTypes.STRING,
    	unique: true
    },
    password: {
    	type: DataTypes.STRING,
    	allowNull: false
    }, 
  }, {
  	classMethods: {
  		associate = function(models) {
    		// associations can be defined here
  	}
  }
  });
  return User;
};