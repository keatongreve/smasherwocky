var User = require('../../api/models/User.js');

module.exports = {

  list: function(req, res) {
    User.find(function(err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        });
      }

      res.render('index', {
        users: Users
      });
    });
  },

}
