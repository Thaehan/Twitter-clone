module.exports = (app) => {
  const users = require('../controllers/user.controller');

  var router = require('express').Router();

  // Create a new Tutorial
  router.post('/', users.createUser);

  router.get('/', (req, res) => {
    res.json({ username: 'Thaehannn', password: '123456' });
  });

  // Retrieve all Tutorials

  // Retrieve all published Tutorials

  // Retrieve a single Tutorial with id

  // Update a Tutorial with id

  // Delete a Tutorial with id

  // Create a new Tutorial

  app.use('/user', router);
};
