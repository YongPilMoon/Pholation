const { User }  = require('../../modules');
const crypto = require('crypto');

module.exports = {
  signup: (req, res) => {
      console.log(req);
      const username = req.body.email;
      const password = req.body.password;
      const encrypted = crypto.createHmac('sha1', process.env.SECRET_KEY)
      .update(password)
      .digest('base64');

      User.create({
        username: username,
        password: encrypted
      })
      .then(rst => res.send(rst.dataValues))
  }
};
