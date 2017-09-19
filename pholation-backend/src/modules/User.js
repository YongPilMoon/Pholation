const crypto = require('crypto');

module.exports = function(sequelize, DataTypes){

  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      field: 'title'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    }
  }, {
    freezeTableName: true
  });

  User.prototype.verify = function (password) {
    const encrypted = crypto.createHmac('sha1', process.env.SECRET_KEY)
    .update(password)
    .digest('base64');

    return this.password === encrypted
  };

  return User;
};


