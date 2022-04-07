const db = require('../models');
const User = db.users;

exports.createUser = (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send({ message: 'Content can not be empty!' });
    return;
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send({ message: error });
    });
};

exports.getUser = (req, res) => {
  const { id } = req.body;
  const user = {
    username: 'Thaehan',
    password: 'newspapers123z',
  };

  res.send(user);

  // User.findById(id)
  //   .then((data) => {
  //     if (!data) {
  //       res.status(404).send({
  //         message: 'Not found Tutorial with id ' + id,
  //       });
  //     } else {
  //       res.send(data);
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message: 'Error retrieving Tutorial with id=' + id,
  //     });
  //   });
};
