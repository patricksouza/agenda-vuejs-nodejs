module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nome: {
        type: Sequelize.STRING
      },
      ncelular: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };