module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nome: {
        type: Sequelize.STRING
      },
      ncelular: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };