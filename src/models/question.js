'use strict';
export default (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    name: DataTypes.STRING,
    birthDay: DataTypes.DATE,
    response: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};
